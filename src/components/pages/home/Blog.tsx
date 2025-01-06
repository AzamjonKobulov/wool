"use client";

import { useState } from "react";
import Image from "next/image";

// Type for blog post data
interface BlogPost {
  date: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
}

const blogData: { [key: string]: BlogPost[] } = {
  all: [
    {
      date: "1 мая 2024",
      category: "Бизнес",
      title:
        "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отто",
      description:
        "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста...",
      imageSrc: "/assets/images/img-blogs.png",
    },
    {
      date: "2 мая 2024",
      category: "Технологии",
      title:
        "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отто",
      description:
        "Технологии продолжают развиваться, и важно быть в курсе последних изменений в веб-разработке...",
      imageSrc: "/assets/images/img-blogs.png",
    },
    {
      date: "1 мая 2024",
      category: "Бизнес",
      title:
        "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отто",
      description:
        "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста...",
      imageSrc: "/assets/images/img-blogs.png",
    },
    {
      date: "2 мая 2024",
      category: "Технологии",
      title:
        "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отто",
      description:
        "Технологии продолжают развиваться, и важно быть в курсе последних изменений в веб-разработке...",
      imageSrc: "/assets/images/img-blogs.png",
    },
  ],
  news: [
    {
      date: "1 мая 2024",
      category: "Новости",
      title:
        "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отто",
      description:
        "Учитывая новые обновления в языках программирования, разработчики теперь могут использовать новые возможности...",
      imageSrc: "/assets/images/img-blogs.png",
    },
    {
      date: "1 мая 2024",
      category: "Новости",
      title:
        "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отто",
      description:
        "Учитывая новые обновления в языках программирования, разработчики теперь могут использовать новые возможности...",
      imageSrc: "/assets/images/img-blogs.png",
    },
    {
      date: "1 мая 2024",
      category: "Новости",
      title:
        "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отто",
      description:
        "Учитывая новые обновления в языках программирования, разработчики теперь могут использовать новые возможности...",
      imageSrc: "/assets/images/img-blogs.png",
    },
    {
      date: "1 мая 2024",
      category: "Новости",
      title:
        "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отто",
      description:
        "Учитывая новые обновления в языках программирования, разработчики теперь могут использовать новые возможности...",
      imageSrc: "/assets/images/img-blogs.png",
    },
  ],
  reviews: [
    {
      date: "3 мая 2024",
      category: "Обзоры",
      title:
        "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отто",
      description:
        "Новый фреймворк для фронтенда был представлен на последней конференции. Мы подробно рассмотрим его возможности...",
      imageSrc: "/assets/images/img-blogs.png",
    },
    {
      date: "3 мая 2024",
      category: "Обзоры",
      title:
        "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отто",
      description:
        "Новый фреймворк для фронтенда был представлен на последней конференции. Мы подробно рассмотрим его возможности...",
      imageSrc: "/assets/images/img-blogs.png",
    },
    {
      date: "3 мая 2024",
      category: "Обзоры",
      title:
        "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отто",
      description:
        "Новый фреймворк для фронтенда был представлен на последней конференции. Мы подробно рассмотрим его возможности...",
      imageSrc: "/assets/images/img-blogs.png",
    },
    {
      date: "3 мая 2024",
      category: "Обзоры",
      title:
        "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отто",
      description:
        "Новый фреймворк для фронтенда был представлен на последней конференции. Мы подробно рассмотрим его возможности...",
      imageSrc: "/assets/images/img-blogs.png",
    },
  ],
};

export default function Blog() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("all");

  // Function to change active tab
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section id="blog">
      <div className="max-w-5xl mx-auto space-y-3.5 mt-8 px-2.5">
        {/* Title */}
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <h2 className="font-semibold text-brand-dark text-[19px] leading-[26px]">
            Блог
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

        {/* Tabs */}
        <div className="flex items-center gap-5 font-semibold">
          <button
            onClick={() => handleTabChange("all")}
            className={activeTab === "all" ? "text-brand-purple-10" : ""}
          >
            Все
          </button>
          <button
            onClick={() => handleTabChange("news")}
            className={activeTab === "news" ? "text-brand-purple-10" : ""}
          >
            Новости
          </button>
          <button
            onClick={() => handleTabChange("reviews")}
            className={activeTab === "reviews" ? "text-brand-purple-10" : ""}
          >
            Обзоры
          </button>
        </div>

        {/* Blogs */}
        <div className="flex flex-col md:flex-row gap-7">
          {/* Image */}
          <div className="md:w-1/2 relative flex items-end aspect-square xs:aspect-video rounded-lg overflow-hidden p-3">
            <Image
              src={blogData[activeTab][0].imageSrc}
              alt="Blog Image"
              width={1151}
              height={640}
              className="absolute inset-0 size-full object-cover"
            />

            {/* Overlay */}
            <div className="space-y-2.5 w-full backdrop-blur font-semibold rounded-lg mt-auto p-5">
              {/* Top */}
              <div className="flex items-center gap-3.5 text-11">
                <p>{blogData[activeTab][0].date}</p>
                <p className="flex items-center gap-1.5">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.2474 1.32812H7.7474M5.9974 8.32812V4.82812M8.8849 4.85729C9.68212 5.65451 10.0807 6.61701 10.0807 7.74479C10.0807 8.87257 9.68212 9.83507 8.8849 10.6323C8.08767 11.4295 7.12517 11.8281 5.9974 11.8281C4.86962 11.8281 3.90712 11.4295 3.1099 10.6323C2.31267 9.83507 1.91406 8.87257 1.91406 7.74479C1.91406 6.61701 2.31267 5.65451 3.1099 4.85729C3.90712 4.06007 4.86962 3.66146 5.9974 3.66146C7.12517 3.66146 8.08767 4.06007 8.8849 4.85729ZM8.8849 4.85729L10.0807 3.66146"
                      stroke="#222222"
                      strokeWidth="2"
                    />
                  </svg>
                  {blogData[activeTab][0].date}
                </p>
                <p className="text-brand-purple-10">
                  #<span>{blogData[activeTab][0].category}</span>
                </p>
              </div>

              <a
                href="#"
                className="font-bold text-sm leading-[22px] line-clamp-2"
              >
                {blogData[activeTab][0].title}
              </a>
            </div>
          </div>

          {/* Blog Posts List */}
          <ul className="md:w-1/2 divide-y divide-brand-gray-30 border-y border-brand-gray-30">
            {blogData[activeTab].map((post, index) => (
              <li
                key={index}
                className="space-y-2.5 w-full font-semibold py-2.5"
              >
                <div className="flex items-center gap-3.5 text-11 text-brand-gray-40">
                  <p>{post.date}</p>
                  <p className="flex items-center gap-1.5">
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-brand-gray-40"
                    >
                      <path
                        d="M4.2474 1.32812H7.7474M5.9974 8.32812V4.82812M8.8849 4.85729C9.68212 5.65451 10.0807 6.61701 10.0807 7.74479C10.0807 8.87257 9.68212 9.83507 8.8849 10.6323C8.08767 11.4295 7.12517 11.8281 5.9974 11.8281C4.86962 11.8281 3.90712 11.4295 3.1099 10.6323C2.31267 9.83507 1.91406 8.87257 1.91406 7.74479C1.91406 6.61701 2.31267 5.65451 3.1099 4.85729C3.90712 4.06007 4.86962 3.66146 5.9974 3.66146C7.12517 3.66146 8.08767 4.06007 8.8849 4.85729ZM8.8849 4.85729L10.0807 3.66146"
                        stroke="#222222"
                        strokeWidth="2"
                      />
                    </svg>
                    {post.date}
                  </p>
                  <p className="text-brand-purple-10">
                    #<span>{post.category}</span>
                  </p>
                </div>

                <a
                  href="#"
                  className="font-bold text-sm leading-[22px] line-clamp-2"
                >
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
