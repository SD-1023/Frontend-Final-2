import Card from "../../../shared-components/Card";
import Carousel from "react-elastic-carousel";

export default function NewArrivals() {
  let breakPoints = [
    { width: 640, itemsToShow: 2.3, enableMouseSwipe: true },
    { width: 768, itemsToShow: 3.3, pagination: true, enableMouseSwipe: false },
    { width: 1024, itemsToShow: 4, pagination: true, enableMouseSwipe: false },
  ];

  return (
    <div className="pl-4 my-6 md:pt-[1.81rem]">
      <h1 className="pb-3 md:pb-[1.48rem] font-semibold text-sm sm:text-[1.325rem] md:text-[2.125rem]	md:leading-[2.125rem]">
        New Arrivals
      </h1>

      <Carousel
        showArrows={false}
        enableTilt={false}
        itemsToShow={4}
        pagination={false}
        breakPoints={breakPoints}
        showEmptySlots={false}
      >
        <Card
          className={"mr-4"}
          img={"bag1.png"}
          brand={"Grande"}
          color={"Blossom Pouch"}
          price={"$39.49"}
        />
        <Card
          className={"mr-4"}
          img={"bag1.png"}
          brand={"Grande"}
          color={"Blossom Pouch"}
          price={"$39.49"}
        />
        <Card
          className={"mr-4"}
          img={"bag1.png"}
          brand={"Grande"}
          color={"Blossom Pouch"}
          price={"$39.49"}
        />
        <Card
          className={"mr-4"}
          img={"bag1.png"}
          brand={"Grande"}
          color={"Blossom Pouch"}
          price={"$39.49"}
        />
        <Card
          className={"mr-4"}
          img={"bag1.png"}
          brand={"Grande"}
          color={"Blossom Pouch"}
          price={"$39.49"}
        />
      </Carousel>
    </div>
  );
}
