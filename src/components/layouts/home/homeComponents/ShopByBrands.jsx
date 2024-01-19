import React from "react";
import Brands from "../../../shared-components/Brands";

export default function ShopByBrands() {
  const data = Array.apply(null, Array(6));
  return (
    <div className="pt-[1.75rem] px-4 md:pl-[1.38rem] pb-6 md:w-full">
      <h2 className="text-[0.875rem] pb-[0.81rem] sm:text-[1.325rem] lg:text-[2.125rem] lg:leading-[2.75rem] font-semibold text-color-dark">
        Shop By Brands
      </h2>
      <div className="grid grid-cols-[repeat(3,minmax(100px,300px))] grid-row-2 gap-x-4 gap-y-6 md:grid-cols-6 ">
        {data.map((brand, index) => (
          <Brands key={index} img={"prada.png"} />
        ))}
      </div>
    </div>
  );
}
