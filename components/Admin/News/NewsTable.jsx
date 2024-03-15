"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa";
import { BsChatLeftQuote } from "react-icons/bs";

const NewsTable = () => {
  const [newArray, setnewArray] = React.useState([]);
  const getData = async () => {
    try {
      const res = await fetch("/api/news", {
        method: "GET",
      });
      const data = await res.json();

      setnewArray(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="grid grid-cols-2 overflow-auto w-full container ">
      <div className="col-span-2 flex">
        <div className=" flex-1"></div>
        <Link href={`/admin/news/insert`}>
          <button className="bg-[#77A8D8] text-white rounded-lg p-3 hover:bg-[#295F93]">
            เพิ่มข้อมูลข่าวสาร
          </button>
        </Link>
      </div>
      <div className="col-span-2 grid grid-cols-3 gap-5 mt-3">
        {newArray.map((res, index) => {
          return (
            <div className="p-4 max-w-md" key={index}>
              <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                {/*  <div className="p-3">
                  <img
                    className=" h-20 w-full object-cover object-center rounded-lg hover:border-rose-600 hover:border"
                    src={res.news_pic}
                    alt="blog"
                  />
                </div> */}
                <div className="p-6">
                  <h1 className="title-font  text-[16px] font-medium text-gray-900 mb-3 text-ellipsis overflow-hidden">
                    {res.news_title}
                  </h1>
                  <p className="leading-relaxed mb-3">{res.desc}</p>
                  <div className="flex items-center flex-wrap">
                    <a
                      href={`/admin/news/newdatail/${res.news_id}`}
                      className="text-indigo-500 inline-flex 
                      items-center md:mb-2 lg:mb-0 
                      hover:cursor-pointer 
                      hover:text-indigo-700"
                    >
                      Learn More
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <FaEye className="mr-2"/>
                      {res.news_watching}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <BsChatLeftQuote />
                      {res.comment}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsTable;
