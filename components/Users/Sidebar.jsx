import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Sidebar = ({ children }) => {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className="w-32"
            alt=""
          />
          <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-500">
            <FaAngleDown />
          </button>
        </div>
        <ul className="flex-1 px-3">{children}</ul>
        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            className="w-10 h-10 rounded-md"
            alt=""
          />
        <div className={`flex justify-between items-center w-52 ml-3`}>
          <div className="leading-4">
            <h4 className="font-semibold">jogn doe</h4>
            <span className="text-xs text-gray-600">Johndoe@gmail.com</span>
          </div>
        </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
