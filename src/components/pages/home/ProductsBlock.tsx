"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import ProductCard from "@/components/shared/ProductCard";

const carpets = [
  {
    img: "/assets/images/carpet-1.jpeg",
  },
  {
    img: "/assets/images/carpet-2.jpeg",
  },
  {
    img: "/assets/images/carpet-3.jpeg",
  },
  {
    img: "/assets/images/carpet-4.jpeg",
  },
  {
    img: "/assets/images/carpet-5.jpeg",
  },
  {
    img: "/assets/images/carpet-6.jpeg",
  },
  {
    img: "/assets/images/carpet-7.jpeg",
  },
  {
    img: "/assets/images/carpet-8.jpeg",
  },
  {
    img: "/assets/images/carpet-9.jpeg",
  },
  {
    img: "/assets/images/carpet-10.jpeg",
  },
];

interface ProductsBlockProps {
  title: string;
}

export default function ProductsBlock({ title }: ProductsBlockProps) {
  return (
    <section id="Sales">
      <div className="max-w-5xl mx-auto pt-8 space-y-6 px-2.5">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-brand-dark text-[19px] leading-[26px]">
            {title}
          </h2>

          <button className="flex items-center gap-2.5 bg-brand-gray-20 text-brand-purple-10 text-xs font-semibold leading-5 whitespace-nowrap rounded-lg py-1.5 px-3">
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
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          autoplay={true}
          breakpoints={{
            0: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="products_swiper"
        >
          {carpets.map((carpet, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard carpet={carpet} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
