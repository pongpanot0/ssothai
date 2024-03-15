import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Learning = ({ id }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="mt-3">
      <div className="text-[24px] font-semibold text-gray-700 mt-2">
        Developing Management & Communication Skills for New Gen Managers
        การพัฒนาทักษะบริหารและการสื่อสารของผู้จัดการยุคใหม่
      </div>
      <div className="text-[32px] font-bold text-gray-80 mt-4">
        รายละเอียดหลักสูตร
      </div>
      <div className="text-gray-700 mt-2">
        <span className="text-blue-800">สถานที่จัด:</span> Maple Hotel โรงแรม
        เมเปิ้ล
      </div>
      <div className="text-gray-700 mt-2">
        <span className="text-blue-800">วันที่จัด:</span>
        23 เมษายน 2567
      </div>
      <div className="text-gray-700 mt-2">
        <span className="text-blue-800">ระยะเวลาการอบรม:</span> หลักสูตร 1 วัน
        (9:00 น.-16:00 น.)
      </div>
      <div className="text-gray-700 mt-5">
        <span className="text-blue-800">หัวข้อการอบรม:</span>{" "}
        <span className="">
          <ul className="list-disc pl-10 pb-10 gap-4">
            <li className="mt-2">
              บทบาทหน้าที่และความรับผิดชอบ (Role and Responsibility)
            </li>
            <li className="mt-2">
              บทบาทหน้าที่และความรับผิดชอบ (Role and Responsibility)
            </li>
            <li className="mt-2">
              บทบาทหน้าที่และความรับผิดชอบ (Role and Responsibility)
            </li>
            <li className="mt-2">
              บทบาทหน้าที่และความรับผิดชอบ (Role and Responsibility)
            </li>
          </ul>
        </span>
      </div>
      <div className="grid grid-cols-1  gap-5 mt-5">
        <div className="col-span-1 mx-auto   max-w-5xl px-5 sm:px-6 lg:px-5 gap-5">
          <Slider {...settings}>
            <div className="px-1">
              <img src="0316-1.jpg" alt="" />
            </div>
            <div className="px-1">
              <img src="0316-1.jpg" alt="" />
            </div>
            <div className="px-1">
              <img src="0316-1.jpg" alt="" />
            </div>
            <div className="px-1">
              <img src="0316-1.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Learning;
