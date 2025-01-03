"use client";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";

export default function Sales() {
  return (
    <section id="Sales">
      <div className="max-w-5xl mx-auto space-y-6 px-2.5">
        {/* Title */}
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <h2 className="font-semibold text-brand-dark text-[19px] leading-[26px]">
            Акции
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
          // spaceBetween={20}
          slidesPerView={1.2}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          autoplay={true}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
          }}
          className="sales_swiper"
        >
          {Array.from({ length: 4 }, (_, idx) => (
            <SwiperSlide key={idx}>
              <Link href="/" className="space-y-3.5">
                <div className="h-40 relative grid place-content-center bg-brand-gray-20 rounded-10 overflow-hidden p-5">
                  <Image
                    src={`/assets/images/sales-${idx + 1}.png`}
                    alt="Banner Image"
                    width={2000}
                    height={1000}
                    className="w-full object-fill"
                  />

                  {/* Sales Date */}
                  <span className="absolute bottom-5 left-5 bg-white text-brand-red font-medium text-[11px] leading-4 rounded-full py-0.5 px-2.5">
                    Акция до 31 марта
                  </span>
                </div>

                <p className="font-bold text-sm leading-5 px-2.5">
                  Рассрочка 0-0-18 на технику Apple
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
