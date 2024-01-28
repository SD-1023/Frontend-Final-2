import React from "react";

export default function PaymentOption({
  checkedOption,
  setCheckedOption,
  id,
  image,
  title,
}) {
  return (
    <label
      htmlFor={`${id}Radio`}
      className={`w-full text-center px-1 flex flex-col hover:cursor-pointer rounded-xl relative items-center justify-center lg:max-w-[10rem] h-[9rem] ${
        checkedOption === id
          ? " bg-opacity-5 bg-color-primaryTint border border-opacity-5 border-color-primaryTint"
          : "border border-color-lightText"
      }`}
    >
      <img
        className="max-h-[3.5rem] pt-5"
        src={`/Frontend-Final-2/assets/images/${image}`}
        alt=""
      />
      <span className="mt-2 font-medium text-color-typeHighEmphasis">
        {title}
      </span>
      <input
        checked={checkedOption === id}
        className="absolute top-4 right-5 w-4"
        onClick={() => {
          setCheckedOption(id);
        }}
        type="radio"
        name={title}
        id={`${id}Radio`}
      />
    </label>
  );
}
