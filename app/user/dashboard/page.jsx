import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  const course = [
    {
      id: "1",
      name: "A",
      Status: "1",
      img: "/0316-1.jpg",
      author: "A",
    },
    {
      id: "1",
      name: "B",
      Status: "2",
      img: "/0316-1.jpg",
      author: "A",
    },
    {
      id: "1",
      name: "C",
      Status: "3",
      img: "/0316-1.jpg",
      author: "A",
    },
    {
      id: "1",
      name: "D",
      Status: "1",
      img: "/0316-1.jpg",
      author: "A",
    },
  ];
  return (
    <div className="p-1">
      <div className="grid grid-cols-4 gap-3">
        {course.map((res) => {
          return (
            <div className="col-span-1">
              <div className="grid grid-cols-1   border border-gray-300 rounded-xl p-2">
                {" "}
                <Image src={res.img} width={1000} height={500}  className="rounded-xl" alt="" />
                <div>
                  <h2 className="text-[20px] text-gray-800 px-2">
                    หลักสูตร : {res.name}
                  </h2>{" "}
                  <h2 className="text-[14px] text-gray-500 px-3 py-1">
                    วิทยากร : {res.author}
                  </h2>{" "}
                  <h2 className="text-[14px] text-gray-500 px-3 py-1">
                    สถานะ :{" "}
                    {res.Status == 1
                      ? "รอตรวจสอบ"
                      : res.Status == 2
                      ? "กำลังอบรมอยู่"
                      : res.Status == 3
                      ? "ดำเนินการเรียบร้อย"
                      : ""}
                  </h2>
                  <Link href={`/user/course/${res.id}`}>
                  <button className="bg-orange-500 text-white rounded-md w-full hover:bg-orange-700" >ดูรายละเอียด</button>
                  </Link>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
