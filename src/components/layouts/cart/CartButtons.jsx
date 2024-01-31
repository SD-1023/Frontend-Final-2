import React from "react";
import { Link } from "react-router-dom";

export default function CartButtons() {
  return (
    <div className="flex md:flex-row flex-col justify-between w-full">
      <Link className="mb-3" to={"/checkout"}>
        <button className="text-color-bright w-full  py-[0.62rem] font-semibold bg-color-primary rounded-lg px-4 text-center text-sm">
          Proceed to Checkout
        </button>
      </Link>
      <Link to={"/"}>
        <button className="w-full border border-color-primary text-color-primary py-[0.62rem] font-semibold bg-color-bright rounded-lg px-4  text-center  text-sm">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}
