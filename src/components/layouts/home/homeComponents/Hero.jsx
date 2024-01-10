import Icon from "../../../shared-components/Icon";
export default function Hero() {
  const IMG_PATH = "/assets/images/";
  return (
    <div className="mx-4 my-2 relative">
      <div className="flex h-[7.5rem] md:h-[19rem] lg:h-[25rem] overflow-hidden rounded-lg md:rounded-3xl">
        <img className="w-[50%]" src={`${IMG_PATH}home-hero-1.jpg`} alt="" />
        <img className="w-[30%]" src={`${IMG_PATH}home-hero-2.png`} alt="" />
        <img className="w-[20%]" src={`${IMG_PATH}home-hero-3.png`} alt="" />
      </div>
      <div className="flex flex-col py-1 px-2 md:px-[1.94rem] md:py-[0rem] lg:px-[2.94rem] lg:py-[1.56rem] absolute right-0 top-[.62rem] w-7/12 rounded-l-lg lg:rounded-l-3xl  backdrop-blur-[2.5px] bg-[#dededeb3] h-[6.25rem] md:h-[15.75rem] md:top-[1.63rem] lg:h-[19.75rem] lg:top-[2.63rem]">
        <h1 className="text-2xl mb-[3px] leading-[1.625rem] text-color-primary font-extrabold md:text-4xl	md:leading-[5.25rem]	lg:text-6xl	lg:leading-[5.25rem]">
          Carry your Funk
        </h1>
        <p className="text-color-primary text-xs leading-4 md:text-[22px] md:leading-[1.775rem] lg:text-[28px] lg:leading-[2.375rem]">
          Trendy handbags collection for your party animal
        </p>
        <button className="hidden w-fit text-color-bright bg-color-primary md:flex px-[2.34rem] py-[0.75rem] rounded-lg mt-[1.94rem]">
          <Icon name={"arrow"} />
          See more
        </button>
      </div>
    </div>
  );
}
