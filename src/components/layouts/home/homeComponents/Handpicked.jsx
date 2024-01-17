import React from "react";
import CollectionCard from "../../../shared-components/Collection";

export default function Handpicked() {
  const collections = [
    { image: "personalCare.jpg", title: "Personal Care" },
    { image: "handbag.jpg", title: "Handbags" },
    { image: "watch.jpg", title: "Wrist Watches" },
    { image: "sunglass.jpg", title: "Sunglasses" },
  ];
  return (
    <div className="bg-color-primary p-4 sm:p-5 md:pt-8">
      <h2 className="pb-[0.81rem] sm:text-[1.325rem] md:pb-[1.44rem] text-color-bright font-semibold text-sm md:text-[1.725rem] lg:text-[2.125rem] lg:leading-[2.125rem]">
        Handpicked Collections
      </h2>
      <div className="grid grid-rows-2 sm:grid-cols-4 sm:grid-rows-1 gap-4 grid-cols-[repeat(2,minmax(100px,auto))] md:grid-cols-[repeat(auto,minmax(200px,280px))]">
        {collections.map((collection) => (
          <CollectionCard image={collection.image} title={collection.title} />
        ))}
      </div>
    </div>
  );
}
