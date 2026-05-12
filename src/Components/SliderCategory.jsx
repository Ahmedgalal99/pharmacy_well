import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CategorySliderCard from "./CategorySliderCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

const SliderCategory = ({ categories }) => {
  return (
    <Swiper
      data-aos="zoom-in-left"
      slidesPerView={3.5}
      spaceBetween={5}
      freeMode={true}
      modules={[Autoplay, FreeMode]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {categories?.map((item, index) => (
        <SwiperSlide key={index} style={{ backgroundColor: "transparent" }}>
          <CategorySliderCard key={index} item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderCategory;
