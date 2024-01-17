import React from 'react'
import Carousel from "react-elastic-carousel";
import TopCat from '../../../shared-components/TopCat';

export default function TopCategories() {
   
  return (
    <div className="pl-4 my-6 md:pt-[1.81rem] sm:hidden">
       <h1 className="pb-3 md:pb-[1.48rem] font-semibold text-sm sm:text-[1.325rem] md:text-[2.125rem]	md:leading-[2.125rem]">
        Top Categories
      </h1>
      <Carousel
        showArrows={false}
        enableTilt={false}
        itemsToShow={4.5}
        pagination={false}
        showEmptySlots={false}
        enableMouseSwipe={true} 
      >
        <TopCat
          className={"mr-4 "}
          img={"topcategories.svg"}
          title={"Skin Care"}
          
        />
        <TopCat
          className={"mr-4"}
          img={"topcategories.svg"}
          title={"Skin Care"}
          
        />
        <TopCat
          className={"mr-4"}
          img={"topcategories.svg"}
          title={"Skin Care"}
          
        />
        <TopCat
          className={"mr-4"}
          img={"topcategories.svg"}
          title={"Skin Care"}
          
        />
        <TopCat
          className={"mr-4"}
          img={"topcategories.svg"}
          title={"Skin Care"}
          
        />
      </Carousel>
    </div>

  );
}
