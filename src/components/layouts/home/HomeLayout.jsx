import BannerGrid from "./homeComponents/BannerGrid";
import Handpicked from "./homeComponents/Handpicked";
import Hero from "./homeComponents/hero/Hero";
import NewArrivals from "./homeComponents/NewArrivals";
import ShopByBrands from "./homeComponents/ShopByBrands";

export default function HomeLayout() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <Handpicked />
      <ShopByBrands />
      <BannerGrid />
    </>
  );
}
