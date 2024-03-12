import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: "",
  });
  try {
    const [result] = await dbconnection.execute(query, values);
    dbconnection.end();
    return result;
  } catch (error) {
    throw Error(error.message);
    return { error };
  }
}
