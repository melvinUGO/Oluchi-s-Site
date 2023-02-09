import React, { useState } from "react";
import { galleryImg } from "../imageData";
import Modal from "../components/Modal";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  // open Modal
  const openModal = (index) => {
    setIsModalOpen(true);
    setImgIndex(index);
  };

  return (
    <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      {galleryImg.map((image, index) => {
        return (
          <img
            onClick={() => openModal(index)}
            loading="lazy"
            key={index}
            src={image.img}
            alt="Oluchi"
          />
        );
      })}
      <Modal
        imgIndex={imgIndex}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Gallery;
