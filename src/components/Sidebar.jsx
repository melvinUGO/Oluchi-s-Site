import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <div
      className={`${
        isSidebarOpen ? " translate-x-0" : "translate-x-[-100%]"
      } sm:translate-x-[-100%] transition-all flex flex-col gap-5 fixed top-0 left-0 p-5 bg-[#eff0f3] w-[80%] h-full shadow-2xl rounded-r-lg`}
    >
      <Link
        to="/"
        onClick={() => closeSidebar()}
        className=" w-full border-b-2 py-3 text-center"
      >
        ABOUT
      </Link>
      <Link
        to="/work"
        onClick={() => closeSidebar()}
        className=" w-full border-b-2 py-3 text-center"
      >
        WORK
      </Link>
      <Link
        to="/gallery"
        onClick={() => closeSidebar()}
        className=" w-full border-b-2 py-3 text-center"
      >
        GALLERY
      </Link>
    </div>
  );
};

export default Sidebar;
