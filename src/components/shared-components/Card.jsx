import Icon from "./Icon";

export default function Card({ brand, color, price, img, className }) {
  const IMG_PATH = "/Frontend-Final-2/assets/images/";

  return (
    <div className={`relative ${className} `}>
      <img className="rounded-lg" alt="" src={`${IMG_PATH}${img}`} />
      <div className="pt-2">
        <h4 className="text-xs md:text-base font-semibold md:font-medium leading-4 md:leading-5 text-color-typeHighEmphasis">
          {brand}
        </h4>
        <Icon className="absolute right-0 bottom-10 " name="heart" />
        <p className="text-xs md:text-sm leading-4 md:leading-5 text-color-typeLowEmphasis">
          {color}
        </p>
        <span className="text-sm md:text-base font-semibold md:font-medium leading-4 text-color-typeHighEmphasis">
          {price}
        </span>
      </div>
    </div>
  );
}
