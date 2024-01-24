import React from "react";
import Carousel from "react-elastic-carousel";
import TopCat from "../../../shared-components/TopCat";
import { useCategoriesContext } from "../../../contexts/CategoriesContext";

export default function TopCategories() {
  const { categories } = useCategoriesContext();

  return (
    <div className="pl-4 my-6 md:pt-[1.81rem] sm:hidden">
      <h1 className="pb-3 md:pb-[1.48rem] font-semibold text-sm sm:text-[1.325rem] md:text-[2.125rem]	md:leading-[2.125rem]">
        Top Categories
      </h1>
      <Carousel
        showArrows={false}
        enableTilt={false}
        itemsToShow={3.5}
        pagination={false}
        showEmptySlots={false}
        enableMouseSwipe={true}
      >
        {categories &&
          categories.map((category) => (
            <TopCat
              id={category.id}
              imgPath={category.image_secure_url}
              title={category.name}
            />
          ))}
      </Carousel>
    </div>
  );
}
