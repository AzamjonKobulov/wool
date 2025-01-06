"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface MenuItem {
  name: string;
  subMenu?: MenuItem[];
}

interface FirstLevelLinks {
  label: string;
}

interface MobileMenuProps {
  toggleMenu: () => void;
}

const menuData: MenuItem[] = [
  {
    name: "Консоли и видеоигры",
    subMenu: [{ name: "Игровые приставки" }, { name: "Аксессуары" }],
  },
  {
    name: "Электрика и свет",
    subMenu: [{ name: "Игровые приставки" }, { name: "Аксессуары" }],
  },
  {
    name: "Сантехника и инженерные системы",
    subMenu: [{ name: "Игровые приставки" }, { name: "Аксессуары" }],
  },
];

const firstLevelLinks: FirstLevelLinks[] = [
  { label: "Новинки" },
  { label: "Акции" },
  { label: "Apple" },
  { label: "Консоли и видеоигры" },
  { label: "Гаджеты" },
  { label: "Мультимедиа" },
  { label: "Умный дом" },
  { label: "Аксессуары" },
  { label: "подборки" },
  { label: "Распродажа" },
];

const MobileMenu = ({ toggleMenu }: MobileMenuProps) => {
  const [currentMenu, setCurrentMenu] = useState<MenuItem[]>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
  const [direction, setDirection] = useState<number>(1); // 1 for forward, -1 for backward

  const handleItemClick = (item: MenuItem) => {
    if (item.subMenu) {
      setDirection(1); // Moving forward
      setBreadcrumbs([...breadcrumbs, item.name]);
      setCurrentMenu(item.subMenu);
    } else {
      // Leaf item clicked, toggle the menu
      toggleMenu();
    }
  };

  const handleBack = () => {
    if (breadcrumbs.length > 0) {
      setDirection(-1); // Moving backward
      const updatedBreadcrumbs = [...breadcrumbs];
      updatedBreadcrumbs.pop();
      setBreadcrumbs(updatedBreadcrumbs);

      // Navigate back to the correct level
      if (updatedBreadcrumbs.length === 0) {
        setCurrentMenu([]); // Reset to the first level
      } else {
        let updatedMenu = menuData;
        updatedBreadcrumbs.forEach((breadcrumb) => {
          const matchedItem = updatedMenu.find(
            (item) => item.name === breadcrumb
          );
          updatedMenu = matchedItem?.subMenu || menuData;
        });
        setCurrentMenu(updatedMenu);
      }
    }
  };

  const slideVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    }),
  };

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="fixed inset-0 top-0 z-50 bg-brand-dark/50"
    >
      {/* Close Btn */}
      <button onClick={toggleMenu} className="absolute top-6 right-2.5">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.08621 1.875L8 7.89255M8 7.89255L14.125 14.125M8 7.89255L1.875 14.125M8 7.89255L13.9138 1.87501"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div className="bg-white w-80 h-screen space-y-4 shadow-lg overflow-hidden p-5">
        {breadcrumbs.length > 0 && (
          <button
            onClick={handleBack}
            className="flex items-center gap-3 text-sm"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.66667 15.5L2 8.80641M8.66666 2.11282L2 8.80641M2 8.80641L16 8.80641"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
            <h3 className="font-semibold uppercase text-sm leading-[22px]">
              {breadcrumbs.at(-1) || "Меню"}
            </h3>
          </button>
        )}

        <div className="relative h-full">
          <AnimatePresence custom={direction}>
            <motion.div
              key={breadcrumbs.length}
              className="absolute top-0 left-0 w-full h-full bg-white"
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              // custom={direction}
            >
              {breadcrumbs.length === 0 ? (
                <>
                  {/* Header */}
                  <div
                    className="flex justify-between items-center text-sm leading-[22px] cursor-pointer border-b border-brand-gray-30 pb-3.5"
                    onClick={() =>
                      handleItemClick({
                        name: "Каталог товаров",
                        subMenu: menuData,
                      })
                    }
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src="/assets/svgs/catalog-icon.svg"
                        alt="Catalog Icon"
                      />
                      <span>Каталог товаров</span>
                    </div>
                    <img
                      src="/assets/svgs/angle-mobile-menu-catalogs.svg"
                      alt="Angle Icon"
                    />
                  </div>

                  {/* Links */}
                  <ul className="font-semibold uppercase text-sm leading-[22px] space-y-4 border-b border-brand-gray-30 pb-3.5 mt-4">
                    {firstLevelLinks.map((link, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center text-sm leading-[22px] cursor-pointer hover:text-brand-purple-10 transition-all duration-200"
                      >
                        <Link
                          href="#"
                          className="w-full flex items-center gap-2.5"
                          onClick={toggleMenu}
                        >
                          {link.label === "Распродажа" ? (
                            <img
                              src=" /assets/svgs/sale-menu-icon.svg"
                              alt="Sale Icon"
                            />
                          ) : null}
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Contacts */}
                  <div className="bg-white space-y-3.5 pt-3.5">
                    <div>
                      <p className="font-semibold text-xs leading-3 lg:leading-5">
                        Звонки по РФ бесплатны
                      </p>
                      <a href="tel:" className="font-bold text-lg leading-7">
                        8 (800) 555-66-66
                      </a>
                    </div>
                    <div className="">
                      <p className="font-semibold text-xs leading-3 lg:leading-5">
                        Время работы кол-центра
                      </p>
                      <p className="font-bold text-lg leading-7">
                        Пн-Пт с 9:00 до 21:00
                      </p>
                    </div>

                    {/* Messangers */}
                    <div className="space-y-1 font-semibold text-xs leading-5">
                      <p>Мессенджеры</p>
                      <div className="flex items-center gap-4">
                        {/* Telegram */}
                        <a href="#" className="flex items-center gap-1.5">
                          <img
                            src="/assets/svgs/telegram-contacts.svg"
                            alt="Telegram Icon"
                          />
                          <span>Telegram</span>
                        </a>
                        {/* Whatsapp */}
                        <a href="#" className="flex items-center gap-1.5">
                          <img
                            src="/assets/svgs/whatsapp-contacts.svg"
                            alt="Whatsapp icon"
                          />
                          <span>WhatsApp</span>
                        </a>
                        {/* Viber */}
                        <a href="#" className="flex items-center gap-1.5">
                          <img
                            src="/assets/svgs/viber-contacts.svg"
                            alt="Viber contacts"
                          />
                          <span>Viber</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <a
                    href="tel:"
                    className="w-fit flex items-center gap-3 bg-brand-purple-10 text-white font-bold text-xs leading-5 rounded-full hover:bg-brand-purple transition-all duration-200 mt-3.5 py-3 px-6"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.8504 11.5642L11.9585 9.66784C11.5817 9.29169 10.9577 9.30312 10.5678 9.69408L9.61466 10.6491C9.55445 10.6159 9.49212 10.5811 9.42659 10.5443C8.82471 10.21 8.00094 9.7519 7.13409 8.88245C6.26468 8.01117 5.80716 7.18426 5.47265 6.58063C5.43735 6.51668 5.40353 6.45502 5.37013 6.39647L6.00981 5.7563L6.3243 5.44071C6.71484 5.04917 6.72561 4.42392 6.34967 4.04668L4.45785 2.15015C4.08192 1.77343 3.45762 1.78486 3.06708 2.17639L2.5339 2.71385L2.54847 2.72834C2.36969 2.95698 2.22029 3.22069 2.10912 3.50506C2.00664 3.77574 1.94283 4.03405 1.91365 4.29288C1.66385 6.3685 2.6102 8.26545 5.17847 10.8396C8.7286 14.3975 11.5895 14.1287 11.713 14.1156C11.9818 14.0834 12.2394 14.019 12.5012 13.9171C12.7824 13.807 13.0454 13.6575 13.2734 13.4787L13.285 13.4891L13.8252 12.9589C14.2149 12.5675 14.2261 11.942 13.8504 11.5642Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                    Перезвоните мне
                  </a>
                </>
              ) : (
                currentMenu.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-sm leading-[22px] cursor-pointer mb-3"
                    onClick={() => handleItemClick(item)}
                  >
                    <span>{item.name}</span>
                    {item.subMenu && (
                      <img
                        src="/assets/svgs/angle-mobile-menu-catalogs.svg"
                        alt="Angle Icon"
                      />
                    )}
                  </li>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
