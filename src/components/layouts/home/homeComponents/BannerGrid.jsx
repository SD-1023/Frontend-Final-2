import Icon from "../../../shared-components/Icon";

export default function BannerGrid() {
  return (
    <div className="mx-4 my-[1.56rem]">
      <h3 className="text-sm mb-[0.81rem]">Makeup & Skincare</h3>
      <div className="relative rounded-lg overflow-hidden ">
        <div className="makeup flex h-[8.25rem] md:h-[18rem] lg:h-[25rem]">
          <img
            className="w-[10%] md:h-fill"
            src="/assets/images/makeup-3.png"
            alt=""
          />
          <img
            className="w-[30%] md:h-fill"
            src="/assets/images/makeup-2.png"
            alt=""
          />
          <img
            className="w-[60%] md:h-fill"
            src="/assets/images/makeup.jpg"
            alt=""
          />
        </div>
        <div className="absolute px-4 py-3 md:py-14 md:px-[2.7rem] lg:px-[3.8rem] lg:py-[6rem]  inset-0 text-[#97451F] flex flex-col">
          <span className="leading-5 mb-1 text-[0.625rem] md:text-[1.275rem] md:mb-4 lg:text-[1.875rem]">
            LIFESTYLE
          </span>
          <h4 className="font-extrabold md:text-[2.5rem] md:w-[30rem] md:leading-10 leading-5 w-[10.4rem] mb-4 lg:text-[3.25rem] lg:leading-[4.25rem]">
            Makeup Accessories from Top Brands
          </h4>
          <div className="flex items-center bg-[#97451F24] w-[1.62rem] h-[1.78rem] rounded-[55%] hover:cursor-pointer md:hidden">
            <Icon name={"arrow"} className={"orange-arrow"} />
          </div>
        </div>
      </div>
    </div>
  );
}
