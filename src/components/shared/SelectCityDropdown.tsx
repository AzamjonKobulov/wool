import useClickOutside from "@/hooks/useClickOutside";
import { motion } from "framer-motion";
import { useRef } from "react";

const cities = [
  { city: "Москва", largeCity: true },
  { city: "Санкт-Петербург", largeCity: true },
  { city: "Нижний Новгород", largeCity: true },
  { city: "Екатеринбург", largeCity: true },
  { city: "Челябинск", largeCity: true },
  { city: "Краснодар", largeCity: true },
  { city: "Пермь", largeCity: true },
  { city: "Бугульма", largeCity: false },
  { city: "Бугуруслан", largeCity: false },
  { city: "Бузулук", largeCity: false },
  { city: "Великие Луки", largeCity: false },
  { city: "Великий Новгород", largeCity: false },
  { city: "Верхняя Пышма", largeCity: false },
  { city: "Верхняя Салда", largeCity: false },
  { city: "Бугульма", largeCity: false },
  { city: "Бугуруслан", largeCity: false },
  { city: "Бузулук", largeCity: false },
  { city: "Великие Луки", largeCity: false },
  { city: "Великий Новгород", largeCity: false },
  { city: "Верхняя Пышма", largeCity: false },
  { city: "Верхняя Салда", largeCity: false },
];

interface ContactsDropdownProps {
  onToggleCities: () => void;
}

export default function SelectCityDropdown({
  onToggleCities,
}: ContactsDropdownProps) {
  // Explicitly type the ref to HTMLDivElement
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropdownRef as React.RefObject<HTMLDivElement>, () =>
    onToggleCities()
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute w-80 lg:w-[552px] z-40 left-0 top-6 space-y-5 bg-white border border-brand-gray-30 rounded-2xl lg:rounded-3xl shadow-contact-dropdown p-4 lg:p-6"
      ref={dropdownRef}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="font-semibold lg:text-xl leading-7">
          Выберите свой город
        </p>

        {/* Close Button */}
        <button onClick={onToggleCities}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-3 lg:size-auto"
          >
            <path
              d="M1.24138 1L8 7.8772M8 7.8772L15 15M8 7.8772L1 15M8 7.8772L14.7586 1.00001"
              stroke="#9393A3"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Search Input */}
      <input
        type="text"
        className="w-full border border-brand-gray-30 rounded outline-none placeholder:font-medium placeholder:text-10
         lg:placeholder:text-xs placeholder:text-brand-dark  text-10 lg:text-xs py-2 px-3 lg:py-3 lg:px-4"
        placeholder="Введите название своего города"
      />

      <div className="grid lg:grid-cols-3 gap-y-1.5 gap-x-5 font-medium text-xs lg:text-sm leading-4 lg:leading-[22px]">
        {cities.map((city, idx) => (
          <button
            key={idx}
            className={`text-left ${
              city.largeCity ? "text-brand-purple-10" : ""
            }`}
          >
            {city.city}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
