import Link from "next/link";
import Image from "next/image";

export default function TopProducts() {
  return (
    <section id="top-products">
      <div className="max-w-5xl mx-auto scroll-none overflow-auto mt-8 px-2.5">
        <div className="min-w-max flex items-center gap-3">
          {/* Product 1 */}
          <Link
            href="#"
            className="h-[187px] relative inline-block bg-brand-peach rounded-2xl overflow-hidden p-5"
          >
            <h3 className="relative z-10 font-bold leading-[22px]">
              Топ товары для девушек
            </h3>

            <Image
              src="/assets/images/top-products-1.png"
              alt="Top Product"
              width={1000}
              height={500}
              className="w-full absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </Link>
          {/* Product 2 */}
          <Link
            href="#"
            className="h-[187px] relative inline-block bg-brand-light-blue rounded-2xl overflow-hidden p-5"
          >
            <h3 className="relative z-10 font-bold leading-[22px]">
              Девайсы для творчества
            </h3>

            <Image
              src="/assets/images/top-products-2.png"
              alt="Top Product"
              width={1000}
              height={500}
              className="w-full absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </Link>
          {/* Product 3 */}
          <Link
            href="#"
            className="h-[187px] relative inline-block bg-brand-peach rounded-2xl overflow-hidden p-5"
          >
            <h3 className="relative z-10 font-bold leading-[22px]">
              Топ товары для девушек
            </h3>

            <Image
              src="/assets/images/top-products-1.png"
              alt="Top Product"
              width={1000}
              height={500}
              className="w-full absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
