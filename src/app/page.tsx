import Banner from "@/components/pages/home/Banner";
import Blog from "@/components/pages/home/Blog";
import Categories from "@/components/pages/home/Categories";
import ProductsBlock from "@/components/pages/home/ProductsBlock";
import OnlineHyperMarket from "@/components/pages/home/OnlineHyperMarket";
import PopularBrands from "@/components/pages/home/PopularBrands";
import Sales from "@/components/pages/home/Sales";
import SiteRibat from "@/components/pages/home/SiteRibat";
import Subscribe from "@/components/pages/home/Subscribe";
import TopProducts from "@/components/pages/home/TopProducts";

export default function Home() {
  return (
    <>
      <Banner />
      <Sales />
      <Categories />
      <ProductsBlock title={"Подборка товаров со скидками"} />
      <ProductsBlock title={"Вам это понравится"} />
      <ProductsBlock title={"Аксессуары"} />
      <OnlineHyperMarket />
      <ProductsBlock title={"Подборка товаров со скидками"} />
      <SiteRibat />
      <TopProducts />
      <ProductsBlock title={"Хит продаж"} />
      <SiteRibat />
      <Blog />
      <PopularBrands />
      <Subscribe />
    </>
  );
}
