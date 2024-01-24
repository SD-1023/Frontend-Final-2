import { useEffect, useState } from "react";
import Brands from "../../../shared-components/Brands";
import useApi from "../../../hooks/useApi";

export default function ShopByBrands() {
  const [brands, setBrands] = useState([]);
  const { get, data } = useApi();
  useEffect(() => {
    get("/brands");
    if (data) {
      setBrands(data);
    }
  }, [data, get]);

  return (
    <div className="pt-[1.75rem] px-4 md:pl-[1.38rem] pb-6 md:w-full">
      <h2 className="text-[0.875rem] pb-[0.81rem] sm:text-[1.325rem] lg:text-[2.125rem] lg:leading-[2.75rem] font-semibold text-color-dark">
        Shop By Brands
      </h2>
      <div className="grid grid-cols-[repeat(3,minmax(100px,300px))] grid-row-2 gap-x-4 md:gap-x-8 gap-y-6 md:grid-cols-6 ">
        {brands.map((brand) => (
          <Brands key={brand.id} img={brand.image_secure_url} />
        ))}
      </div>
    </div>
  );
}
