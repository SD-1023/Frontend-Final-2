import Icon from "../../../shared-components/Icon";

export default function BannerGrid() {
  return (
    <div className="mx-4 my-[1.56rem]">
      <h3 className="text-sm sm:text-[1.325rem] font-semibold mb-[0.81rem] md:hidden">
        Makeup & Skincare
      </h3>
      <div className="relative rounded-lg md:rounded-3xl overflow-hidden ">
        <div className="makeup flex h-[8.25rem] sm:h-[12rem] md:h-[18rem] lg:h-[25rem]">
          <img
            className="w-[10%] md:h-fill"
            src="/assets/images/home-banner-grid/makeup-3.png"
            alt=""
          />
          <img
            className="w-[30%] md:h-fill"
            src="/assets/images/home-banner-grid/makeup-2.png"
            alt=""
          />
          <img
            className="w-[60%] md:h-fill"
            src="/assets/images/home-banner-grid/makeup.jpg"
            alt=""
          />
        </div>
        <div className="absolute px-4 py-3 sm:p-7 md:py-14 md:px-[2.7rem] lg:px-[3.8rem] lg:py-[6rem]  inset-0 text-[#97451F] flex flex-col ">
          <span className="leading-5 mb-1 sm:mb-2 text-[0.625rem] sm:text-[.9rem] md:text-[1.275rem] md:mb-4 lg:text-[1.875rem]">
            LIFESTYLE
          </span>
          <h4 className="font-extrabold sm:text-[1.9rem] md:text-[2.5rem] sm:leading-7 md:leading-10 leading-5 w-[10.4rem] sm:w-[22rem] md:w-[30rem] lg:w-[35rem] mb-4 lg:text-[3.25rem] lg:leading-[4.25rem]">
            Makeup Accessories from Top Brands
          </h4>
          <div className="flex items-center bg-[#97451F24] w-[1.62rem] h-[1.78rem] rounded-[55%] hover:cursor-pointer sm:hidden">
            <Icon name={"arrow"} className={"orange-arrow"} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 h-[6.25rem] sm:h-[8.5rem] md:h-[11rem] lg:h-[15.25rem]">
        <div className="relative rounded-lg md:rounded-3xl overflow-hidden">
          <img
            className="h-full w-full"
            src="/assets/images/home-banner-grid/skincare.png"
            alt=""
          />
          <div className="absolute flex flex-col justify-between h-full right-0 top-0 p-2 sm:p-4 lg:pr-10 lg:pt-7">
            <h4 className="text-right text-sm sm:text-lg md:text-[1.35rem] lg:text-[2.5rem] font-extrabold leading-4 sm:leading-5 md:leading-6 lg:leading-[3.25rem] text-[#A53F64]">
              Skincare <br /> Essentials
            </h4>
            <div className="self-end flex items-center justify-center bg-color-accent bg-opacity-50 w-[1.625rem] h-[1.625rem] sm:w-[1.825rem] sm:h-[1.825rem] md:w-[2.5rem] md:h-[2.5rem] lg:h-[3.1875rem] lg:w-[3.1875rem] rounded-[55%] hover:cursor-pointer">
              <Icon name={"arrow"} className={"pink-arrow lg:w-10"} />
            </div>
          </div>
        </div>
        <div className="relative rounded-lg md:rounded-3xl overflow-hidden">
          <img
            className="h-full w-full"
            src="/assets/images/home-banner-grid/facepacks.png"
            alt=""
          />
          <div className="absolute flex flex-col justify-between h-full right-0 top-0 p-2 sm:p-4 lg:pr-10 lg:pt-7">
            <h4 className="text-right text-sm sm:text-lg md:text-[1.35rem] lg:text-[2.5rem] font-extrabold leading-4 sm:leading-5 md:leading-6 lg:leading-[3.25rem] text-color-primary">
              Facepacks <br /> & Peels
            </h4>
            <div className="self-end flex items-center justify-center bg-color-accent bg-opacity-50 w-[1.625rem] h-[1.625rem] sm:w-[1.825rem] sm:h-[1.825rem] md:w-[2.5rem] md:h-[2.5rem] lg:h-[3.1875rem] lg:w-[3.1875rem] rounded-[55%] hover:cursor-pointer">
              <Icon name={"arrow"} className={"primary-color-arrow lg:w-10"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
