"use client";

import Link from "next/link";
import { useState } from "react";

type AccordionItem = {
  title: string;
  customContent?: JSX.Element;
  links?: string[];
};

const footerItems: AccordionItem[] = [
  {
    title: "Контакты",
    customContent: (
      <>
        {/* Contact Section */}
        <div className="mb-5">
          <a href="tel:" className="font-bold text-lg leading-7 ">
            8 (800) 555-66-66
          </a>
          <p className="text-sm leading-[22px] mt-1.5">Пн-Пт с 9:00 до 21:00</p>
          <p className="text-sm leading-[22px] mt-3">info@rebitts.fun</p>
        </div>

        {/* Social Media Section */}
        <div className="mb-6">
          <h4 className="font-bold leading-6 mb-2">Давайте дружить</h4>
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="size-10 grid place-content-center bg-white rounded-xl"
            >
              <img src="/assets/svgs/vk.svg" alt="Vkontante" />
            </a>
            <a
              href="#"
              className="size-10 grid place-content-center bg-white rounded-xl"
            >
              <img src="/assets/svgs/telegram.svg" alt="Telegram" />
            </a>
            <a
              href="#"
              className="size-10 grid place-content-center bg-white rounded-xl"
            >
              <img src="/assets/svgs/whatsapp.svg" alt="Whatsapp" />
            </a>
            <a
              href="#"
              className="size-10 grid place-content-center bg-white rounded-xl"
            >
              <img src="/assets/svgs/dzen.svg" alt="Dzen" />
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "О компании",
    links: [
      "Реквизиты",
      "О нас",
      "Информация для инвесторов",
      "Сертификаты",
      "Производители",
      "Правовая информация",
      "Правила применения рекомендательных технологий",
    ],
  },
  {
    title: "Акции",
    links: [
      "Реквизиты",
      "О нас",
      "Информация для инвесторов",
      "Сертификаты",
      "Производители",
      "Правовая информация",
      "Правила применения рекомендательных технологий",
    ],
  },
  {
    title: "Компаниям",
    links: [
      "Реквизиты",
      "О нас",
      "Информация для инвесторов",
      "Сертификаты",
      "Производители",
      "Правовая информация",
      "Правила применения рекомендательных технологий",
    ],
  },
  {
    title: "Доставка и оплата",
    links: [
      "Реквизиты",
      "О нас",
      "Информация для инвесторов",
      "Сертификаты",
      "Производители",
      "Правовая информация",
      "Правила применения рекомендательных технологий",
    ],
  },
  {
    title: "Сервис и поддержка",
    links: [
      "Реквизиты",
      "О нас",
      "Информация для инвесторов",
      "Сертификаты",
      "Производители",
      "Правовая информация",
      "Правила применения рекомендательных технологий",
    ],
  },
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Set first accordion as open by default.

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="bg-brand-gray-20">
      <div className="max-w-5xl mx-auto p-2.5">
        {/* Accordion Section */}
        <div>
          {footerItems.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full flex justify-between items-center py-4 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-bold leading-6">{item.title}</span>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "-rotate-90" : ""
                  }`}
                >
                  <path
                    d="M4.60156 15.6875L11.3906 8.6875L4.60156 1.6875"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <ul className="">
                  {item.customContent
                    ? item.customContent
                    : item.links?.map((link, idx) => (
                        <li key={idx}>
                          <Link
                            href="#"
                            className="block font-medium text-sm leading-[22px] py-1.5"
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm font-medium leading-[22px] mt-5 mb-10">
          Вы принимаете условия политики в отношении обработки персональных
          данных и пользовательского соглашения каждый раз, когда оставляете
          своиданные в любой форме обратной связи на сайте Кролик.ру
        </p>
      </div>
    </footer>
  );
}
