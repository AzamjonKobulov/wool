"use client";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Banner() {
  return (
    <div className="max-w-5xl mx-auto px-2.5">
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        autoplay={true}
        className="banner_swiper"
      >
        {Array.from({ length: 3 }, (_, idx) => (
          <SwiperSlide key={idx}>
            <div className="h-48 xs:h-80 sm:h-96 md:h-[650px] rounded-10 overflow-hidden">
              <Image
                src="/assets/images/banner.png"
                alt="Banner Image"
                width={1700}
                height={400}
                className="size-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
