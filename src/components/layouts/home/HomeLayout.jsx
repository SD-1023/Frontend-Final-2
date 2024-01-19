import BannerGrid from "./homeComponents/BannerGrid";
import Handpicked from "./homeComponents/Handpicked";
import Hero from "./homeComponents/hero/Hero";
import NewArrivals from "./homeComponents/NewArrivals";
import ShopByBrands from "./homeComponents/ShopByBrands";
import TopCategories from "./homeComponents/TopCategories";

export default function HomeLayout() {
  return (
    <>
      <Hero />
      <TopCategories />
      <NewArrivals />
      <Handpicked />
      <ShopByBrands />
      <BannerGrid />
    </>
  );
}
