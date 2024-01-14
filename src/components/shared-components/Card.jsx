import React from "react";

export default function Card({ brand, color, price, img, className }) {
  return (
    <div className={`relative ${className} `}>
      <img className="rounded-lg" alt="" src={`/assets/images/${img}`} />
      <div className="pt-2">
        <h4 className="text-xs font-semibold text-color-typeHighEmphasis">
          {brand}
        </h4>
        <img
          className="absolute right-0 bottom-10 "
          src="/assets/icons/heart.svg"
          alt=""
        />
        <p className="text-xs text-color-typeLowEmphasis">{color}</p>
        <span className="text-sm font-semibold text-color-typeHighEmphasis">
          {price}
        </span>
      </div>
    </div>
  );
}