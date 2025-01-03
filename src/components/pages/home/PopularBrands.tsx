"use client";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

// import required modules
import { Grid } from "swiper/modules";
import Link from "next/link";

const brands = [
  {
    img: "/assets/images/brand-1.png",
  },
  {
    img: "/assets/images/brand-2.png",
  },
  {
    img: "/assets/images/brand-3.png",
  },
  {
    img: "/assets/images/brand-4.png",
  },
  {
    img: "/assets/images/brand-5.png",
  },
  {
    img: "/assets/images/brand-6.png",
  },
  {
    img: "/assets/images/brand-7.png",
  },
  {
    img: "/assets/images/brand-8.png",
  },
  {
    img: "/assets/images/brand-9.png",
  },
  {
    img: "/assets/images/brand-10.png",
  },
  {
    img: "/assets/images/brand-11.png",
  },
  {
    img: "/assets/images/brand-12.png",
  },
];

export default function PopularBrands() {
  return (
    <section id="Sales">
      <div className="max-w-5xl mx-auto pt-8 space-y-6 px-2.5">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-brand-dark text-[19px] leading-[26px]">
            Популярные бренды
          </h2>

          <button className="flex items-center gap-2.5 bg-brand-gray-20 text-brand-purple-10 text-xs font-semibold leading-5 rounded-lg py-1.5 px-3">
            Смотреть все
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.25 10.875L11.25 5.85481M6.25001 0.834614L11.25 5.85481M11.25 5.85481L0.75 5.85481"
                stroke="#7573F6"
                strokeLinecap="square"
              />
            </svg>
          </button>
        </div>

        <Swiper
          pagination={{
            clickable: true,
          }}
          grid={{
            rows: 2,
            fill: "row",
          }}
          loop={true}
          modules={[Grid]}
          autoplay={true}
          breakpoints={{
            0: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 5,
              spaceBetween: 10,
              grid: {
                rows: 3,
              },
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 10,
              grid: {
                rows: 3,
              },
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          className="categories_swiper"
        >
          {brands.map((brand, idx) => (
            <SwiperSlide key={idx}>
              <Link
                href="/"
                className="min-h-24 flex items-center justify-center border-2 border-brand-gray-20 rounded-lg p-2.5"
              >
                <Image
                  src={brand.img}
                  alt="brand"
                  width={2000}
                  height={1000}
                  className="w-full shrink-0"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
