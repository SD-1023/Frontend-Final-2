import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function Card({
  id,
  name,
  color,
  price,
  oldPrice,
  salePersent,
  img,
  className,
  section,
}) {
  return (
    <Link
      to={`/product/${id}`}
      className={`relative ${className} flex justify-between flex-col shadow-2xl rounded-lg overflow-hidden`}
    >
      <img
        className={`rounded-lg w-[100%] max-w-[12rem] sm:max-w-[unset] h-[7rem] ${
          section === "newArrivals" ? "max-h-[11.2rem]" : "sm:h-[15.2rem]"
        }  md:h-[20.2rem] md:w-[20.2rem] lg:h-[15.2rem]`}
        alt=""
        src={`${img}`}
      />
      <div className="p-3 pt-4">
        <h4 className="text-xs md:text-base font-semibold md:font-medium md:leading-5 text-color-typeHighEmphasis">
          {name}
        </h4>
        <Icon
          className="absolute right-0 bottom-8 md:bottom-[2.8rem] w-5 mr-3 md:w-6"
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
    </Link>
  );
}
