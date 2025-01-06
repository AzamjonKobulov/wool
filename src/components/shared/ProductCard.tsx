import Link from "next/link";
import Image from "next/image";

interface Carpet {
  img: string;
}

interface ProductCardProps {
  carpet: Carpet;
}

export default function ProductCard({ carpet }: ProductCardProps) {
  return (
    <div>
      {/* Image */}
      <div className="h-[218px] relative space-y-1 bg-brand-gray-20 rounded-2xl p-2">
        <button className="absolute top-4 right-4 z-10">
          <Image
            src="/assets/svgs/product-heart-empty.svg"
            alt="Product Image"
            width={16}
            height={18}
          />
        </button>
        <Image
          src={carpet.img}
          alt="Product Image"
          width={1000}
          height={500}
          className="size-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-1.5">
        <Link href="#" className="text-11 font-medium !leading-3">
          Ковер KARMEN HALI PANAMA PN008B BROWN / BROWN
        </Link>
        {/* Status */}
        <span className="w-fit flex items-center gap-2.5 bg-brand-green/30 text-brand-green text-10 leading-3 rounded-full py-0.5 px-1.5">
          <svg
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 2.1875L3.83333 6.47653L1.5 4.33201"
              stroke="#2DBE64"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          В наличии
        </span>

        {/* Cost & Size */}
        <div className="flex items-end justify-between text-10 leading-3">
          {/* Cost */}
          <div>
            <p className="flex items-center gap-0.5 ">
              {/* Old Cost */}
              <span className="text-brand-gray-80">4 890 ₽ </span>
              {/* Discount */}
              <span className="bg-brand-yellow font-semibold text-brand-dark">
                -35%
              </span>
            </p>

            {/* Cost */}
            <p className="font-bold text-sm leading-[22px]">3 690 ₽ </p>
          </div>

          {/* Size */}
          <p>2.0х4.0м</p>
        </div>

        {/* To Cart */}
        <button className="w-full flex items-center justify-center gap-1 bg-brand-purple-10 text-white text-xs rounded-full py-2">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.86719 2.19531H3.21481C3.95467 2.19531 4.6096 2.67374 4.83458 3.37855L5.09754 4.20232M5.09754 4.20232L6.526 8.42538C6.81725 9.28644 7.73423 9.76613 8.60764 9.51434L12.8878 8.28041C13.6692 8.05515 14.1817 7.30816 14.1106 6.49808L14.0454 5.75404C13.9683 4.87595 13.233 4.20232 12.3516 4.20232H5.09754Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="5.02847" cy="12.091" r="1.46597" fill="white" />
            <circle cx="12.3566" cy="12.091" r="1.46597" fill="white" />
          </svg>

          <span>В корзину</span>
        </button>
      </div>
    </div>
  );
}
