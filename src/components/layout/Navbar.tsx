import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="">
      <nav className="">
        {/* Top Links */}
        <div className="border-b border-brand-gray-30">
          <div className="max-w-5xl mx-auto px-2.5 flex items-center justify-between py-1.5">
            {/* Location */}
            <a
              href="#"
              className="flex items-center gap-1.5 text-brand-gray-60 font-semibold text-xs leading-5"
            >
              <Image
                src="/assets/svgs/icon-map.svg"
                alt="Mob Menu Icon"
                width={16}
                height={16}
              />
              <span>Другой город</span>
            </a>

            {/* Phone Number Dropdown */}
            <div>
              <button className="flex items-center gap-2 text-xs font-bold">
                <span>8 (800) 555-66-66</span>
                <Image
                  src="/assets/svgs/icon-angle.svg"
                  alt="Mob Menu Icon"
                  width={8}
                  height={8}
                />
              </button>
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
                <button>
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
                className="size-full text-xs border border-brand-purple-10 rounded placeholder:text-brand-dark outline-brand-purple-10 px-4 py-3"
                placeholder="Я ищу..."
                id="search"
              />

              <label
                htmlFor="search"
                className="size-[30px] absolute top-1.5 right-1.5 grid place-content-center bg-brand-purple-10 rounded-lg p-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4401 11.4878L14.125 14.125M13.2127 7.44318C13.2127 10.5184 10.6747 13.0114 7.54385 13.0114C4.41303 13.0114 1.875 10.5184 1.875 7.44318C1.875 4.36796 4.41303 1.875 7.54385 1.875C10.6747 1.875 13.2127 4.36796 13.2127 7.44318Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
