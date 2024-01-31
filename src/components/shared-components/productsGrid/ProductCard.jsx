import { Link } from "react-router-dom";
import Icon from "../Icon";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className={`relative flex justify-between flex-col shadow-xl rounded-lg overflow-hidden`}
    >
      <img
        className={` object-contain rounded-lg h-[8rem] sm:h-[11rem] xl:h-[22rem]`}
        alt={product.name}
        src={`${product.image_secure_url}`}
      />
      <div className="relative p-3 pt-4">
        <h4 className="pr-6 text-xs md:text-base font-semibold md:font-medium md:leading-5 text-color-typeHighEmphasis">
          {product.name}
        </h4>
        <Icon
          className="absolute pt-4 right-0 top-0 md:bottom-[2.8rem] w-5 mr-3 md:w-6"
          name="heart"
        />
        <p className="text-xs md:text-sm leading-4 md:leading-5 text-color-typeLowEmphasis">
          {product.category}
        </p>
        <div className="md:flex items-center">
          <span className="text-sm md:text-base font-semibold md:font-medium leading-4 text-color-typeHighEmphasis">
            ${product.finalPrice}
          </span>
          {product.oldPrice !== product.price ? (
            <div className=" flex items-center flex-wrap text-[0.625rem] font-medium md:font-normal leading-4">
              <del className="text-color-typeLowEmphasis mr-[0.38rem] md:ml-[0.38rem] md:text-sm">
                ${product.price}
              </del>
              <span className="text-color-error md:text-base">
                %{product.offer} OFF
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Link>
  );
}
