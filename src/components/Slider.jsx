import React, { useRef, useState } from "react";
import { workImg } from "../imageData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

const Slider = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {workImg.map(({ img }, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={img} alt="work" />
          </SwiperSlide>
        );
      })}
      ...
    </Swiper>
  );
};

export default Slider;
