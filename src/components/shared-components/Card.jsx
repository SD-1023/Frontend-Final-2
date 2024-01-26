import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function Card({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className={`relative w-full mr-4 sm:mr-6 md:mr-7 lg:mr-8 rounded-lg overflow-hidden`}
    >
      <img
        className={`rounded-lg w-[100%] max-h-[9rem] md:max-h-[13rem]`}
        alt=""
        src={`${product.image_secure_url}`}
      />
      <div className="relative p-3 pt-4">
        <h4 className="text-xs md:text-base font-semibold md:font-medium md:leading-5 text-color-typeHighEmphasis">
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
        </div>
      </div>
    </Link>
  );
}
