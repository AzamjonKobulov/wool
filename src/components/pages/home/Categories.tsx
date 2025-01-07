"use client";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";
import Link from "next/link";

const categories = [
  {
    name: "Планшеты",
    img: "/assets/images/category-1.png",
    quantity: 235,
  },
  {
    name: "Планшеты",
    img: "/assets/images/category-2.png",
    quantity: 235,
  },
  {
    name: "Компьютеры",
    img: "/assets/images/category-3.png",
    quantity: 235,
  },
  {
    name: "Смарт часы",
    img: "/assets/images/category-4.png",
    quantity: 235,
  },
  {
    name: "Наушники",
    img: "/assets/images/category-5.png",
    quantity: 235,
  },
  {
    name: "Аксессуары",
    img: "/assets/images/category-6.png",
    quantity: 235,
  },
  {
    name: "Акустика",
    img: "/assets/images/category-7.png",
    quantity: 235,
  },
  {
    name: "Телевизоры",
    img: "/assets/images/category-8.png",
    quantity: 235,
  },
];

export default function Categories() {
  return (
    <section id="#categories">
      <div className="max-w-5xl mx-auto space-y-6 px-2.5">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h2 className="hidden font-semibold text-brand-dark text-[19px] leading-[26px]">
            Популярные категории
          </h2>
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
          modules={[Grid, Pagination]}
          autoplay={true}
          breakpoints={{
            0: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3.7,
              spaceBetween: 10,
            },
          }}
          className="categories_swiper"
        >
          {categories.map((cat, idx) => (
            <SwiperSlide key={idx}>
              <Link href="/" className="space-y-3.5">
                <div className="relative border-2 border-brand-gray-20 rounded-10 overflow-hidden p-3">
                  <p className="text-[11px] font-semibold text-brand-purple-10">
                    {cat.name}
                  </p>

                  <span className="block text-10 font-semibold text-brand-gray-50 mt-12">
                    {cat.quantity}
                  </span>

                  <Image
                    src={cat.img}
                    alt={cat.name}
                    width={2000}
                    height={1000}
                    className="absolute right-0 bottom-0 w-1/2 xs:w-auto object-contain"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
