import React from "react";

const Activitynews = () => {
  return (
    <div className="max-container padding-container grid grid-cols-3 mt-10 ">
      <div className="relative col-start-2 col-span-1 col-end-2 text-center">
        <h1 className="mb-4 text-4xl font-semibold">ข่าวสารกิจกรรม</h1>
      </div>
      <div className="relative  col-span-3  text-center">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 relative  items-center">
            <img
              className=" w-full h-auto flex   overflow-hidden  transition duration-300 ease-in hover:opacity-50"
              src="/0316-1.jpg"
              alt=""
            />
          </div>
          <div className="col-span-2 relative">
            <img
              className="max-w-xs h-auto  overflow-hidden  transition duration-300 ease-in hover:opacity-50"
              src="0316-1.jpg"
              alt=""
            />
          </div>
          <div className="row-span-2 col-span-2 relative">
            <img
              className="max-w-xs h-auto   overflow-hidden   transition duration-300 ease-in hover:opacity-50"
              src="0610-1.jpg"
              alt=""
            />
          </div>
          <div className="col-span-2  relative">
            <img
              className="max-w-xs h-auto   overflow-hidden transition duration-300 ease-in hover:opacity-50"
              src="0704-1.jpg"
              alt=""
            />
          </div>
          <div className="row-span-2 col-span-2 relative ">
            <img
              className="max-w-xs h-auto   overflow-hidden   transition duration-300 ease-in hover:opacity-50"
              src="/0316-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activitynews;
