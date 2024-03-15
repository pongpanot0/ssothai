"use client";

import Image from "next/image";
import React, { useState } from "react";
import Modal from "@/components/Modal";
const NewsDetails = ({ params }) => {
  React.useEffect(() => {
    getData();
    getIMG();
  }, []);
  const [data, setData] = React.useState([]);
  const [imgdata, setImgData] = React.useState([]);
  const getData = async () => {
    try {
      const res = await fetch("/api/news/byID", {
        method: "POST",
        body: params.newsID,
      });

      const data = await res.json();
      console.log(data);
      setData(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getIMG = async () => {
    try {
      const res = await fetch(`/api/news/byID?foo=${params.newsID}`, {
        method: "GET",
      });

      const data = await res.json();

      setImgData(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const handleImageClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageUrl("");
  };
  return (
    <div className="p-5 overflow-auto w-full container h-screen bg-cover">
      <div className="grid grid-cols-1">
        <h2 className="text-[24px] text-gray-800">
          หัวข้อ : {data[0]?.news_title}
        </h2>
        <h2 className="text-[20px] mt-3 text-gray-700">รูปภาพ</h2>
        <div className="flex items-center align-middle">
          {" "}
          <Image
            width={1000}
            height={500}
            src={data[0]?.news_pic}
            className="rounded-md h-full"
            alt=""
          />
        </div>

        <h2 className="text-[18px] mt-3 text-gray-500">รายละเอียด</h2>

        <div dangerouslySetInnerHTML={{ __html: data[0]?.news_desc }}></div>
        <div className={`grid grid-cols-${data[0]?.pic_column || 1} gap-5`}>
          {imgdata.map((res) => (
            <img
              className="cursor-pointer hover:border hover:border-[#295F93]"
              src={res.img_path}
              alt=""
              onClick={() => handleImageClick(res.img_path)}
            />
          ))}
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          imageUrl={selectedImageUrl}
        />
      </div>
    </div>
  );
};

export default NewsDetails;
