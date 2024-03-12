"use client";
import React from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoIosCash } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
const Payment = () => {
  return (
    <div className="p-10 container mx-auto grid grid-cols-2">
      <div className="col-span-2 ">
        <div className="grid grid-cols-6">
          <div className="col-span-6 flex items-center mb-5">
            <FaUserAlt className="text-[44px] text-gray-500" />
            <h2 className="font-semibold text-[28px] ml-3 text-gray-500">
              สรุปรายละเอียดผู้ซื้อ
            </h2>
          </div>
          <div className="col-span-3 p-3">
            {" "}
            <input
              placeholder="ชื่อ"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xs:text-sm xs:leading-6"
            />{" "}
          </div>
          <div className="col-span-3 p-3">
            {" "}
            <input
              placeholder="นามสกุล"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xs:text-sm xs:leading-6"
            />{" "}
          </div>
          <div className="col-span-3 p-3">
            {" "}
            <input
              placeholder="First Name"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xs:text-sm xs:leading-6"
            />{" "}
          </div>
          <div className="col-span-3 p-3">
            {" "}
            <input
              placeholder="Last Name"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xs:text-sm xs:leading-6"
            />{" "}
          </div>
          <div className="col-span-2 p-3">
            <input
              placeholder="หมายเลขสมาชิกสภาวิศวกร"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xs:text-sm xs:leading-6"
            />{" "}
          </div>
          <div className="col-span-2 p-3">
            <input
              placeholder="ตำแหน่ง"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xs:text-sm xs:leading-6"
            />{" "}
          </div>
          <div className="col-span-2 p-3">
            <input
              placeholder="หน่วยงาน"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xs:text-sm xs:leading-6"
            />{" "}
          </div>
        </div>
      </div>
      <div className="col-span-2 mt-2">
        <div className="grid grid-cols-4">
          <div className="col-span-4 flex items-center">
            <IoIosCash className="text-[44px] text-gray-500" />
            <h2 className="font-semibold text-[28px] ml-3 text-gray-500">
              ชำระเงิน
            </h2>
          </div>
          <div className="col-span-1">
            <img
              className=" w-full h-auto"
              src="https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png"
              alt=""
            />
          </div>
          <div className="col-span-1 p-5">
            <h2 className="text-[24px] text-gray-900"> จำนวนเงิน 4000 บาท</h2>
            <h2 className="text-[18px] text-gray-500">
              โอนเงินเข้าบัญชีธนาคารไทยพาณิชย์
            </h2>
            <h2 className="text-[18px] text-gray-500">
              ชื่อบัญชีสมาคมทางหลวงแห่งประเทศไทย สาขาชิดลม เลขที่บัญชี 008 2
              00408 8 ประเภทบัญชีสะสมทรัพย์{" "}
            </h2>
          </div>
          <div className="col-span-2 p-5">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              เมื่อโอนเงินเรียบร้อยแล้ว อัพโหลดสลิป
            </label>
            <input
              class="block w-full text-sm text-black border border-gray-300 rounded-lg cursor-pointer bg-gray-100 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
            />
          </div>
        </div>
      </div>
      <div className="col-span-2 mt-3">
        <button className=" bg-[#FF9900] w-full p-2 text-white rounded-lg hover:bg-orange-500 ">
          ดำเนินการต่อ{" "}
        </button>
      </div>
    </div>
  );
};

export default Payment;
