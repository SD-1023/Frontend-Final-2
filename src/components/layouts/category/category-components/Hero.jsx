export default function Hero() {
  const IMG_PATH =
    "/Frontend-Final-2/assets/images/categories/handpag-hero.png";
  return (
    <div className="relative hidden md:block">
      <img
        className="w-full rounded-3xl max-h-[25rem] xl:max-h-[30rem]"
        src={IMG_PATH}
        alt=""
      />
      <div className="absolute top-0 right-0 text-color-dark pt-[4.7rem] pr-[3rem] lg:pt-[6.7rem] lg:pr-[4.7rem]">
        <h1 className="text-5xl lg:text-7xl font-bold mb-[0.7rem]">
          UPTO 70% OFF
        </h1>
        <h2 className="text-5xl lg:text-7xl">BLACK FRIDAY</h2>
      </div>
    </div>
  );
}
