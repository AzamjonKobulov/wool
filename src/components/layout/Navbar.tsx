"use client";

import Image from "next/image";
import Link from "next/link";
import ContactsDropdown from "../shared/ContactsDropdown";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import SelectCityDropdown from "../shared/SelectCityDropdown";
import SearchModal from "../shared/SearchModal";
import MobileMenu from "../shared/MobileMenu";

export default function Navbar() {
  const [contactsOpen, setContactsOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleContacts() {
    setContactsOpen((open) => !open);
  }

  function toggleCities() {
    setCitiesOpen((open) => !open);
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setIsTyping(value.length > 0);
    // document.body.classList.add("overflow-hidden");
  }

  function toggleMenu() {
    setMenuOpen((open) => !open);
    document.body.classList.toggle("overflow-hidden");
  }

  return (
    <header className="">
      <nav className="">
        {/* Top Links */}
        <div className="border-b border-brand-gray-30">
          <div className="max-w-5xl mx-auto px-2.5 flex items-center justify-between py-1.5">
            <div className="relative">
              {/* Location */}
              <button
                onClick={toggleCities}
                className="flex items-center gap-1.5 text-brand-gray-60 font-semibold text-xs leading-5"
              >
                <Image
                  src="/assets/svgs/icon-map.svg"
                  alt="Mob Menu Icon"
                  width={16}
                  height={16}
                />
                <span>Другой город</span>
              </button>

              <AnimatePresence>
                {citiesOpen && (
                  <SelectCityDropdown onToggleCities={toggleCities} />
                )}
              </AnimatePresence>
            </div>

            {/* Phone Number Dropdown */}
            <div className="relative">
              <button
                onClick={toggleContacts}
                className="flex items-center gap-2 text-xs font-bold"
              >
                <span>8 (800) 555-66-66</span>
                <Image
                  src="/assets/svgs/icon-angle.svg"
                  alt="Mob Menu Icon"
                  width={8}
                  height={8}
                  className={`${
                    contactsOpen ? "rotate-180" : ""
                  } transition-all duration-200`}
                />
              </button>

              <AnimatePresence>
                {contactsOpen && (
                  <ContactsDropdown onToggleContacts={toggleContacts} />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="max-w-5xl mx-auto px-2.5">
          <div className="py-2.5">
            {/* Items */}
            <div className="flex items-center justify-between">
              {/* Menu btn & Logo */}
              <div className="flex items-center gap-2.5">
                <button onClick={toggleMenu}>
                  <Image
                    src="/assets/svgs/icon-mob-menu.svg"
                    alt="Mob Menu Icon"
                    width={23}
                    height={23}
                  />
                </button>
                {/* Logo */}
                <Link href="/">
                  <Image
                    src="/assets/svgs/logo.svg"
                    alt="Logo"
                    width={93}
                    height={33}
                  />
                  <div className="text-10">
                    ковры и <span className="text-[#9747ff]">покрытия</span>
                  </div>
                </Link>
              </div>

              {/* Others */}
              <div className="flex items-center gap-2.5 font-medium text-brand-gray-50 text-8 leading-3">
                {/* Search */}
                <button className="flex flex-col items-center gap-1">
                  <Image
                    src="/assets/svgs/search.svg"
                    alt="Mob Menu Icon"
                    width={16}
                    height={16}
                  />
                  <span className="">Поиск</span>
                </button>
                {/* Comparision */}
                <button className="relative flex flex-col items-center gap-1">
                  {/* Qty */}
                  <span className="absolute -top-2.5 right-0 bg-brand-yellow text-brand-dark text-xs leading-4 rounded-full py-0.5 px-1">
                    12
                  </span>
                  <Image
                    src="/assets/svgs/compare.svg"
                    alt="Mob Menu Icon"
                    width={16}
                    height={16}
                  />
                  <span className="">Сравнение</span>
                </button>
                {/* Favorites */}
                <button className="flex flex-col items-center gap-1">
                  <Image
                    src="/assets/svgs/heart.svg"
                    alt="Mob Menu Icon"
                    width={16}
                    height={16}
                  />
                  <span className="">Сравнение</span>
                </button>
                {/* Search */}
                <button className="flex flex-col items-center gap-1">
                  <Image
                    src="/assets/svgs/cart.svg"
                    alt="Mob Menu Icon"
                    width={16}
                    height={16}
                  />
                  <span className="">Корзина</span>
                </button>
              </div>
            </div>

            {/* Search */}
            <div className="relative mt-2.5">
              <input
                type="text"
                className="relative z-30 size-full text-xs border border-brand-purple-10 rounded placeholder:text-brand-dark outline-brand-purple-10 px-4 py-3"
                placeholder="Я ищу..."
                id="search"
                onFocus={() => {
                  setIsTyping(true); // Show the modal
                }}
                onBlur={(e) => {
                  if (!e.target.value) {
                    setIsTyping(false); // Hide the modal if input is empty
                  }
                }}
                onChange={handleSearchChange}
              />

              <AnimatePresence>{isTyping && <SearchModal />}</AnimatePresence>

              {/* Mobile Menu */}
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && <MobileMenu toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </header>
  );
}
