"use client";
import Modal from "@/components/Modal";
import React, { useState } from "react";

const NewsDetails = ({ params }) => {
  React.useEffect(() => {
    getData();
    getIMG();
    update();
  }, []);
  const [data, setData] = React.useState([]);
  const [imgdata, setImgData] = React.useState([]);
  const update = async () => {
    try {
      const updateWatch = await fetch(`/api/news/byID?foo=${params.newsid}`, {
        method: "PUT",
      });
      console.log(updateWatch);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getData = async () => {
    try {
      const res = await fetch("/api/news/byID", {
        method: "POST",
        body: params.newsid,
      });

      const data = await res.json();

      setData(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getIMG = async () => {
    try {
      const res = await fetch(`/api/news/byID?foo=${params.newsid}`, {
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
    <div className=" grid col-span-4">
      <div className="col-span-4 text-center">
        <h2 className="text-[32px] font-semibold mt-5">
          {" "}
          {data[0]?.news_title}
        </h2>
      </div>
      <div className="col-span-4 rounded-lg flex justify-center items-center">
        <img
          src={data[0]?.news_pic}
          className=" px-40 rounded-lg scale-75  "
          alt=""
        />
      </div>
      <div
        className="col-span-4 px-10 text-center"
        dangerouslySetInnerHTML={{ __html: data[0]?.news_desc }}
      ></div>
      <div className="col-span-4 px-20 mt-5">
        {" "}
        <div className={`grid grid-cols-${data[0]?.pic_column || 1} gap-5`}>
          {imgdata.map((res) => (
            <img
              className={`cursor-pointer ${
                data[0]?.pic_column === 1 ? "h-full" : "h-64"
              } w-full hover:border hover:border-[#295F93]`}
              src={res.img_path}
              alt="img_path"
              onClick={() => handleImageClick(res.img_path)}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={selectedImageUrl}
      />
    </div>
  );
};

export default NewsDetails;
