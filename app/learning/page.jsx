import Image from "next/image";
import Link from "next/link";
import React from "react";

const courses = [
  {
    id: 1,
    name: "Courses1",
    banner: {
      url: "img_block_1HNY.png",
    },
    author: "pongpanot",
    wait: 50,
    active: 25,
    date: "23 เมษายน 2567",
    time: "ระยะเวลาการอบรม: 09:00 – 16:00 น.",
  },
  {
    id: 2,
    name: "Courses2",
    banner: {
      url: "img_block_1HNY.png",
    },
    author: "pongpanot",
    wait: 50,
    active: 18,
    date: "23 เมษายน 2567",
    time: "ระยะเวลาการอบรม: 09:00 – 16:00 น.",
  },
  {
    id: 3,
    name: "Courses3",
    banner: {
      url: "img_block_1HNY.png",
    },
    author: "pongpanot",
    wait: 50,
    active: 19,
    date: "23 เมษายน 2567",
    time: "ระยะเวลาการอบรม: 09:00 – 16:00 น.",
  },
  {
    id: 4,
    name: "Courses3",
    banner: {
      url: "img_block_1HNY.png",
    },
    author: "pongpanot",
    wait: 50,
    active: 21,
    date: "23 เมษายน 2567",
    time: "ระยะเวลาการอบรม: 09:00 – 16:00 น.",
  },
];
const News = () => {
  return (
    <div
      className="p-10 grid grid-cols-1 
    sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5
    sm:ml-1
    sm:mr-1
    lg:ml-10
    lg:mr-10
    "
    >
      {courses.map((res, index) => {
        return (
          <div
            key={index}
            className="
            xs:mt-5
            sm:mt-5
            sm:pl-5 
            sm:pr-5 
            md:pl-10
            md:pr-10
            rounded-lg   pl-10  pr-10  cursor-pointer 
            xs:border
            lg:border-none
            lg:hover:bg-gray-100 lg:hover:scale-105 transform transition duration-500 
            hover:pb-1.5
            hover:pt-1.5
            "
          >
            <div
              className="grid grid-cols-1 gap-5
            sm:grid-cols-1
            xs:grid-cols-1
            md:grid-cols-3
            "
            >
              <div>
                <h1 className="text-start text-[22px] md:text-[22px] xs:text-[20px] text-gray-700">
                  <font className="text-[26px] text-gray-800">หลักสูตร</font>{" "}
                  Developing Management And Communication Skills For New Gen
                  Managers
                </h1>
                <h2 className="text-start text-[18px] md:text-[18px] xs:text-[16px]">
                  การพัฒนาทักษะบริหารและการสื่อสารของผู้จัดการยุคใหม่{" "}
                </h2>
                <h2 className="text-gray-500 text-start text-[16px] md:text-[16px] xs:text-[14px] mt-5">
                  {" "}
                  สถานที่: Maple Hotel โรงแรม เมเปิ้ล Early Bird 4,000 บาท,
                  General Ticket 5,500 บาท
                </h2>
                <div>
                  <Link href={`/learning/${res.id}`}>
                    <button
                      className="mt-5 block 
                  lg:w-6/12
                  xs:w-full
                  rounded-md 
                  bg-indigo-600 
                  px-3 py-2 
                  text-center 
                  text-sm 
                  font-semibold 
                  text-white 
                  shadow-sm 
                  hover:bg-indigo-500 
                  focus-visible:outline 
                  focus-visible:outline-2 
                  focus-visible:outline-offset-2 
                  focus-visible:outline-indigo-600"
                    >
                      รายละเอียด
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <h1 className="text-start text-[24px] md:text-[28px]">
                  {res.date}
                </h1>
                <h2 className="text-start text-[16px] md:text-[18px]">
                  {res.time}
                </h2>
              </div>
              <Image
                src={res.banner.url}
                alt={res.name}
                width={1000}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
