import Icon from "./Icon";

export default function Card({
  name,
  color,
  price,
  oldPrice,
  salePersent,
  img,
  className,
}) {
  const IMG_PATH = "/Frontend-Final-2/assets/images/";

  return (
    <div className={`relative ${className} `}>
      <img className="rounded-lg" alt="" src={`${IMG_PATH}${img}`} />
      <div className="pt-2">
        <h4 className="text-xs md:text-base font-semibold md:font-medium md:leading-5 text-color-typeHighEmphasis">
          {name}
        </h4>
        <Icon
          className="absolute right-0 bottom-8 md:bottom-[2.8rem] w-5 md:w-6"
          name="heart"
        />
        <p className="text-xs md:text-sm leading-4 md:leading-5 text-color-typeLowEmphasis">
          {color}
        </p>
        <div className="md:flex items-center">
          <span className="text-sm md:text-base font-semibold md:font-medium leading-4 text-color-typeHighEmphasis">
            ${price}
          </span>
          {oldPrice !== price && (
            <div className="text-[0.625rem] font-medium md:font-normal leading-4">
              <del className="text-color-typeLowEmphasis mr-[0.38rem] md:ml-[0.38rem] md:text-sm">
                ${oldPrice}
              </del>
              <span className="text-color-error md:text-base">
                %{salePersent} OFF
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
