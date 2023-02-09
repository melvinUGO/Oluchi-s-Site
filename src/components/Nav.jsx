import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = ({ openSidebar }) => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    const nav = document.querySelector(".nav");
    const scrollHeight = window.scrollY;
    const navHeight = nav.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        sticky ? " transition-all md:fixed w-full left-0 top-0 pb-3" : ""
      } bg-[#eff0f3] nav z-10`}
    >
      <div className=" sm:block flex justify-between items-center">
        <button onClick={() => openSidebar()} className="sm:hidden">
          <FaBars />
        </button>
        <h1
          className={`${
            sticky ? "md:text-xl my-0 pt-2 " : "md:text-6xl my-5"
          } transition-all font-serif text-2xl  text-center text-[#0d0d0d]`}
        >
          Oluchi Arinze
        </h1>
        <button className="none">
          <FaBars />
        </button>
      </div>
      <div
        className={`${
          sticky ? "mt-0" : "mt-12"
        } hidden sm:flex gap-10 justify-center items-center text-[#0d0d0d]`}
      >
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "gray" } : { color: "#2a2a2a" }
          }
          to="/"
        >
          ABOUT
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "gray" } : { color: "#2a2a2a" }
          }
          to="/work"
        >
          WORK
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "gray" } : { color: "#2a2a2a" }
          }
          to="/gallery"
        >
          GALLERY
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
