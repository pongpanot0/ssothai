import React from "react";
import Image from "next/image";
const DetailCourse = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-4 gap-5 ">
        <div className="col-span-4 grid grid-cols-4 gap-5 bg-gray-200 p-3">
          <div className="col-span-1">
            <Image src="/0316-1.jpg" width={1000} height={500} alt="" />
          </div>
          <div className="col-span-2">
            <div className="grid">
              <h2 className="text-[24px] text-gray-800">Course Name</h2>
              <h2 className="text-[20px] text-gray-400">Author</h2>
              <h2 className="text-[18px] text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                cupiditate omnis qui nulla eaque aliquam totam tempora non optio
                eveniet nemo mollitia quae impedit vero consequuntur
                reprehenderit, officia commodi ullam.
              </h2>
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid">
              <h2 className="text-[24px] text-gray-700 text-center align-middle">
                30 สิงหาคม 2566
              </h2>
              <button className="bg-orange-500 text-white w-full rounded-3xl mt-2  p-2">
                ลงทะเบียน
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="gird  h-full px-3">
            <h2 className="text-[24px] ">Descitions</h2>
            <h2 className="text-[18px] mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              ipsam aliquid officia similique totam consectetur veniam vitae
              dolor enim vel! Vel, voluptatibus culpa impedit fugiat officia
              velit unde reprehenderit cum!
            </h2>
            <h2 className="text-[24px] mt-2">What you Learn</h2>
            <ul className="px-10 text-[16px] list-disc">
              <li className="text-[16px]">1</li>
              <li className="text-[16px]">2</li>
              <li className="text-[16px]">3</li>
              <li className="text-[16px]">4</li>
            </ul>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid">
           
            <div class="flex flex-col items-center gap-4">
              <div className="relative my-4">
                <div className="absolute -inset-2">
                  <div className="w-28 h-full max-w-sm mx-auto lg:mx-0 opacity-70 blur-lg bg-gradient-to-r "></div>
                </div>
                <img
                  src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c"
                  className="relative object-cover shrink-0 h-28 w-28 z-10 rounded-xl"
                />
              </div>

              <p className="text-2xl font-bold">Pongpanot Samarkkarn</p>

              <div className="text-gray-400">Author</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCourse;
