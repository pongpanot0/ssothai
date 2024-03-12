"use client";
import React, { useEffect, useState } from "react";
import { AiFillCalendar } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import Learning from "../../../components/LearningDetail/Learning";
import { FaUsers } from "react-icons/fa";
import Link from "next/link";

const LearningDetail = ({ params }) => {
  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 600) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-neutral-700 to-neutral-900 w-full h-full bg-cover ">
        <div
          className="p-5 grid grid-cols-1 
sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-12 sm:ml-1 sm:mr-1 lg:ml-5 lg:mr-5"
        >
          <div className="col-span-1"></div>
          <div className="col-span-10">
            <div
              className="
            grid grid-cols-1 
            lg:grid-cols-5 
            rounded-lg 
            bg-neutral-900  
            shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] 
            dark:bg-neutral-700 
            md:max-w-full  
            md:flex-row md:w-full w-full"
            >
              <div className="col-span-2">
                <img
                  className="h-full w-full rounded-t-lg object-cover md:h-full md:w-full md:rounded-none md:rounded-l-lg"
                  src="/0316-1.jpg"
                  alt=""
                />
              </div>

              <div className="col-span-3 ">
                <div className="grid grid-cols-1 p-6 ">
                  <h5 className="mb-2 text-[22px] text-xl font-medium text-white dark:text-neutral-50">
                    Business • Education
                  </h5>
                  <p className="mb-4  text-white dark:text-neutral-200 text-[28px]">
                    Developing Management and Communication Skills for New Gen
                    Managers การพัฒนาทักษะบริหารและการสื่อสารของผู้จัดการยุคใหม่
                  </p>
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-neutral-100 text-[24px] scale-125 mt-3" />
                    <div>
                      <p className="text-[18px] mt-5 ml-5  text-neutral-100 dark:text-neutral-300">
                        23 Apr 2024 at 09:00 - 16:00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarked className="text-neutral-100 text-[24px] scale-125 mt-3" />
                    <div>
                      <p className="text-[18px] mt-5 ml-5 text-neutral-100 dark:text-neutral-300">
                        Maple Hotel
                        <br></br>
                        Bangkok, Thailand
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaUserFriends className="text-neutral-100 text-[24px] scale-125 mt-3" />
                    <div>
                      <p className="text-[18px] mt-5 ml-5 text-neutral-100 dark:text-neutral-300">
                        24/50
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>

      <div className="w-full h-full bg-cover mt-3 align-middle ">
        <div
          className={
            header
              ? "fixed w-[100%] top-0 bg-gradient-to-r from-neutral-700 to-neutral-900 pt-3 pb-3"
              : "bg-[transparent]"
          }
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 sticky top-auto  gap-3">
            <div className="col-span-1"></div>
            <div className="col-span-3">
              <div className="grid grid-cols-1 lg:grid-cols-6 xs:grid-cols-1 gap-3">
                <div className="col-span-1 ">
                  {" "}
                  <button
                    type="button"
                    className="inline-block rounded 
              bg-neutral-300 px-6 pb-2 
              pt-2.5 text-xl 
              font-medium uppercase leading-normal 
              text-neutral-800  transition duration-150 ease-in-out 
              hover:bg-neutral-600 hover:text-teal-50
              w-full
              "
                  >
                    info
                  </button>
                </div>
                <div className="col-span-1 text-start">
                  {" "}
                  {/*    <button
                    type="button"
                    className="inline-block rounded 
                  w-full
              bg-neutral-300 px-6 pb-2 
              pt-2.5 text-xl 
              font-medium uppercase leading-normal 
              text-neutral-800  transition duration-150 ease-in-out 
              hover:bg-neutral-600 hover:text-teal-50
              "
                  >
                    วิทยากร
                  </button> */}
                </div>
                <div className="col-span-1"></div>
                <div
                  className={
                    header
                      ? "col-span-1 text-end mt-2 text-[24px] text-teal-50"
                      : "col-span-1 text-end mt-2 text-[24px]"
                  }
                >
                  {" "}
                </div>
                <div className="col-span-2 text-end ">
                  <Link href={`/learning/register/${params.learningId}`}>
                    <button
                      type="button"
                      className="inline-flex items-center rounded 
              bg-neutral-600 px-6 pb-2 
              pt-2.5 text-xl 
              w-full
              ml-2.5
              font-medium uppercase leading-normal 
              text-teal-50  transition duration-150 ease-in-out 
              hover:bg-neutral-800 hover:text-teal-50
              text-center
              "
                    >
                      <FaUsers className="scale-125" />
                      <span className="ml-5">ลงทะเบียน</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-1"></div>
          <div className="col-span-3 p-10">
            <Learning id={params.learningId} />
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </>
  );
};

export default LearningDetail;

