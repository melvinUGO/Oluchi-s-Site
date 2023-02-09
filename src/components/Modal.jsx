import React from "react";
import { galleryImg } from "../imageData";
import { FaTimes } from "react-icons/fa";

const Modal = ({ imgIndex, isModalOpen, setIsModalOpen }) => {
  // disable scrolling when modal is open
  var body = document.getElementsByTagName("BODY")[0];
  if (isModalOpen) {
    body.classList.add("stop-scrolling");
  } else {
    body.classList.remove("stop-scrolling");
  }

  return (
    <div
      className={`${
        isModalOpen ? "visible" : "hidden"
      }  transition-all z-20  fixed top-0 left-0 w-[100vw] h-[100%] bg-[rgb(0,0,0,.9)]`}
    >
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute right-10 top-10 text-white text-[1.5rem]"
      >
        <FaTimes />
      </button>
      <img
        className=" h-auto w-[95%] sm:w-[70%] md:w-[36%] mx-auto md:mt-10 sm:mt-30 mt-40"
        src={galleryImg[imgIndex].img}
        alt="Oluchi"
      />
    </div>
  );
};

export default Modal;
