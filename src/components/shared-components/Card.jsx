import Icon from "./Icon";

export default function Card({ brand, color, price, img, className }) {
  const IMG_PATH = "/Frontend-Final-2/assets/images/";

  return (
    <div className={`relative ${className} `}>
      <img className="rounded-lg" alt="" src={`${IMG_PATH}${img}`} />
      <div className="pt-2">
        <h4 className="text-xs font-semibold text-color-typeHighEmphasis">
          {brand}
        </h4>
        <Icon className="absolute right-0 bottom-10 " name="heart" />
        <p className="text-xs text-color-typeLowEmphasis">{color}</p>
        <span className="text-sm font-semibold text-color-typeHighEmphasis">
          {price}
        </span>
      </div>
    </div>
  );
}
