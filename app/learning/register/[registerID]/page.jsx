"use client";
import React, { useState } from "react";
import QRCode from "qrcode.react";
import Link from "next/link";
const generatePayload = require("promptpay-qr");
function RegisterLerning({ params }) {
  const [phoneNumber, setPhoneNumber] = useState("098-549-6936");
  const [amount, setAmount] = useState(50.0);
  const [qrCode, setqrCode] = useState("sample");
  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }
  function handleAmount(e) {
    setAmount(parseFloat(e.target.value));
  }
  function handleQR() {
    setqrCode(generatePayload(phoneNumber, { amount }));
  }
  return (
    <div className="container mx-auto p-10 grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2">
      <div className="col-span-2">
        <div className="grid grid-cols-6 xs:grid-cols-1 md:grid-cols-6">
          <div className="col-span-1">
            {" "}
            <img src="/0316-1.jpg" alt="" className="w-40 h-auto" />
          </div>
          <div className="col-span-4">
            {" "}
            <h2 className="text-[32px] font-bold">การยืนยันคำสั่งซื้อ</h2>
            <h5 className="text-[20px] font-semibold">
              กรุณาตรวจสอบความถูกต้องของข้อมูลหลังกรอกข้อมูลเสร็จสิ้น
              <br></br>
              โดยผู้ลงทะเบียนสามารถทำการชำระเงินได้ตามข้อมูลรายละเอียดของช่องทางที่ระบุไว้
            </h5>
          </div>
        </div>
      </div>
      <div className="mt-3 col-span-2 bg-[#FF9900] w-full h-8 rounded-lg"></div>
      <div className="col-span-1 mt-5">
        <h2 className="text-[24px] font-semibold">ข้อมูลส่วนตัว</h2>{" "}
      </div>
      <div className="col-span-1 mt-5 pl-5">
        <h2 className="text-[24px] font-semibold">รายการสั่งซื้อของคุณ</h2>{" "}
      </div>
      <div className="col-span-1">
        <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 gap-5 mt-3">
          <div>
            <input
              placeholder="ชื่อ"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />{" "}
          </div>
          <div>
            <input
              placeholder="นามสกุล"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />{" "}
          </div>
          <div>
            <input
              placeholder="ชื่อภาษาอังกฤษ"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />{" "}
          </div>
          <div>
            <input
              placeholder="นามสกุลภาษาอังกฤษ"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />{" "}
          </div>
          <div className="col-span-2 ">
            <input
              placeholder="หมายเลขสมาชิกสภาวิศวกร "
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xs:text-sm sm:leading-6"
            />{" "}
          </div>
          <div className="col-span-2 ">
            <input
              placeholder="ตำแหน่ง "
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xs:text-sm sm:leading-6"
            />{" "}
          </div>
          <div className="col-span-2 ">
            <input
              placeholder="หน่วยงาน "
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xs:text-sm xs:leading-6"
            />{" "}
          </div>
          <div className="col-span-2 ">
            <input
              placeholder="โทรศัพท์ "
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xs:text-sm xs:leading-6"
            />{" "}
          </div>
          <div className="col-span-2 ">
            <input
              placeholder="Email "
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xs:text-sm xs:leading-6"
            />{" "}
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="grid mx-10 p-5  xs:grid-cols-1 md:grid-cols-4">
          <div className="bg-gray-200 col-span-5 grid grid-cols-4 xs:grid-cols-1 md:grid-cols-4">
            <div className="col-span-1">
              {" "}
              <img
                src="/0316-1.jpg"
                className=" w-24 h-auto m-5 mr-10"
                alt=""
              />
            </div>
            <div className="flex items-center col-span-1">
              {" "}
              <h5 className="text-[18px] font-semibold ml-5">ชื่อหลักสูตร</h5>
            </div>
            <div className="col-span-2 flex flex-1 items-center text-end">
              <div className="flex-1"></div>
              <h5 className="text-[18px] text-end font-semibold mr-5">4000</h5>
            </div>
          </div>
          <div className="col-span-5 mt-5 px-5 ">
            <div className="grid grid-cols-4 xs:grid-cols-1 md:grid-cols-4">
              <div className="col-span-2">
                {" "}
                <h2 className="text-[24px] font-semibold">รวม</h2>{" "}
              </div>
              <div className="col-span-2  text-right ">
                {" "}
                <h2 className="text-[24px] font-semibold text-right">
                  4000
                </h2>{" "}
              </div>
              <div className="col-span-4 mt-2">
                หากมีข้อสอบถามเพิ่มเติม โปรดติดต่อสมาคมทางหลวงแห่งประเทศไทย
                โทรศัพท์ 0 2984 0836 หรือ 089 777 1283 และ 086 344 0555 Email :
                roadsassothai2016@gmail.com
              </div>
              <div className="col-span-4 mt-2">
                <Link href={`/learning/payment/${params.registerID}`}>
                  <button
                    className="bg-[#FF9900] w-full m-3 rounded-lg h-auto text-white 
                hover:bg-orange-700
                py-2"
                  >
                    เข้าสู่หน้าชำระเงิน
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterLerning;
