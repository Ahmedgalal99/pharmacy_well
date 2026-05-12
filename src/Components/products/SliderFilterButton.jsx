import React, { useEffect } from "react";
// Import Swiper for slider
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode } from "swiper";
// CSS Module
import styles from "@/styles/products.module.css";

const SliderFilterButton = ({
  categories,
  setactiveCateFilter,
  activeCateFilter,
}) => {
  useEffect(() => {
    console.log(activeCateFilter, "activeCateFilter");
  }, [activeCateFilter]);

  return (
    <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper px-2 pt-3"
      >
        <SwiperSlide className="w-100">
          <div
            onClick={() => setactiveCateFilter("all")}
            className={`${styles.boxLabeld} ${
              activeCateFilter == "all" ? styles.active : null
            }`}
          >
            <p className={styles.label}>All</p>
          </div>
        </SwiperSlide>
        {categories?.length > 0 &&
          categories?.map((item, i) => {
            return (
              <SwiperSlide className="w-100" key={i}>
                <div
                  className={`${styles.boxLabeld} ${
                    activeCateFilter == item?.id ? styles.active : null
                  }`}
                  onClick={() => setactiveCateFilter(item?.id)}
                >
                  <p className={styles.label}> {item?.name}</p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default SliderFilterButton;
