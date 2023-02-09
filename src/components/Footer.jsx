import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className=" mt-10 flex justify-between items-center">
      <div className="flex flex-wrap gap-2 items-center">
        <button className="bg-[#ff8e3c] text-white p-2 rounded-full">
          <a
            target="_blank"
            href="https://www.instagram.com/theoluchiarinze/?next=%2F#"
          >
            <FaInstagram />
          </a>
        </button>
        <button className="bg-[#ff8e3c] text-white p-2 rounded-full">
          <a
            target="_blank"
            href="https://www.instagram.com/theoluchiarinze/?next=%2F#"
          >
            <FaTwitter />
          </a>
        </button>
        <button className="bg-[#ff8e3c] text-white p-2 rounded-full">
          <a
            target="_blank"
            href="https://www.instagram.com/theoluchiarinze/?next=%2F#"
          >
            <FiMail />
          </a>
        </button>
      </div>
      <p>Copyright 2023</p>
    </div>
  );
};

export default Footer;
