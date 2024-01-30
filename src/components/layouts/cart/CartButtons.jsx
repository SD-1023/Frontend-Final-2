import React from "react";

export default function CartButtons() {
  return (
    <div className="flex sm:flex-row flex-col  justify-between w-full">

        <button className="text-color-bright py-[0.62rem] font-semibold mb-2 sm:mb-0 bg-color-primary rounded-lg px-4 text-center text-sm">
         Proceed to Checkout
        </button>



        <button className="text-color-bright py-[0.62rem] font-semibold bg-color-primary rounded-lg px-4  text-center  text-sm">
          Continue Shopping
        </button>
   
    </div>
  );
}
