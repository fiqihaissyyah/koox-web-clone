import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Mousewheel, Pagination } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
// import "swiper/css/pagination";

SwiperCore.use([Pagination, FreeMode, Mousewheel]);

export default function Slider({children}) {
  return (
    <div className="w-full h-full pt-1 md:pt-7 md:pb-20 pb-2 bg-white">
      <Swiper
        direction={"vertical"}
        mousewheel= {true}
        pagination={{
          progressbarOpposite: true,
          progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
          type: 'progressbar'
        }}
        freeMode= {{
            enabled: true,
            sticky: true,
        }}
        slidesPerView={1}
        className="flex flex-col gap-4 justify-center items-center h-full w-full"
      >
        {/* <SwiperSlide>
            <img src={bg} className="object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://koox.co.uk/data/wp-content/uploads/2018/05/Test_nico-575x1024.png" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://koox.co.uk/data/wp-content/uploads/2018/05/drinkable_skincare.png"/>
        </SwiperSlide> */}
        {children}
      </Swiper>
    </div>
  );
}
