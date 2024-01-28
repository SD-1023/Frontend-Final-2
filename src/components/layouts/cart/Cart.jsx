import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";

export default function Cart() {
//   const [Items, setItems] = useState({});
//   const { id } = useParams();
//   const { get, data } = useApi();

//   useEffect(() => {
//     get(`/cart/${id}`);
//   }, [get, id]);

//   useEffect(() => {
//     setItems(data?.cartItems);
//   }, [data]);


  return (
    <div className="bg-color-accent pb-[1.07rem]">
      <h1 className="p-4">My Cart</h1>
      <div className="pl-4 md:flex hidden">
        <div className=" md:flex border-b border-color-lightText ">
          <h2>Product Name</h2>
          <h2 className="pl-[9.7rem]">Price</h2>
          <h2 className="pl-[4.3rem]">Qty</h2>
          <h2 className="pl-[5.6rem]">Sub Total</h2>
        </div>
      </div>

      
      <div className="md:flex md:gap-[8.62rem]">
   
        <div className="w-full ml-4 p-2 bg-color-bright rounded-lg">
          <div className="flex pb-3">
            <div className="flex flex-shrink-0">
              <img
                className="w-24  rounded-lg"
                src="/Frontend-Final-2/assets/images/bag1.png"
              />
            </div>
            <div className="pl-2 md:flex ">
              <div className="md:pr-[6.75rem]">
                <h3 className="text-xs font-semibold">Coach</h3>
                <p className="text-xs font-medium text-color-typeLowEmphasis">
                  leath.....
                </p>
                <button className="rounded text-xs text-color-typeLowEmphasis  bg-color-grey p-0.5">
                  Qty: 1
                </button>
              </div>
              <div className="flex gap-[0.37rem]">
                <p className=" md:pr-[3.69rem] text-color-typeHighEmphasis text-sm font-semibold md:font-normal">
                  $54.69
                </p>
                <p className="md:hidden text-color-typeLowEmphasis font-medium text-[0.625rem]">
                  $69.77
                </p>
                <p className="md:hidden text-color-error">20% OFF</p>
                <p className="hidden md:pr-[6.19rem] md:font-normal md:text-sm md:block">
                  1
                </p>
                <p className="hidden md:font-normal md:text-sm md:block">
                  $54.69
                </p>
              </div>
            </div>
          </div>
          <div className="border-t font-semibold border-color-lightText text-center">
            <button className="text-color-primary pt-[0.62rem] text-sm">
              Remove
            </button>
          </div>
        </div>

        
        <div>

          <div className="px-4 pt-5 pb-[3.69rem]">
            <h4 className="text-sm font-semibold">Order Details</h4>
            <div className="flex  justify-between">
              <label className="text-sm text-color-typeLowEmphasis font-medium">
                Sub Total
              </label>
              <div>$119.69</div>
            </div>
            <div className="flex  justify-between">
              <label className="text-color-typeLowEmphasis text-sm font-medium">
                Discount
              </label>
              <div>-$3.60</div>
            </div>
            <div className="flex  justify-between">
              <label className="text-color-typeLowEmphasis text-sm font-medium">
                Delivery Fee
              </label>
              <div>-$15.00</div>
            </div>
            <div className="flex  justify-between">
              <label className="text-sm font-semibold">Grand Total</label>
              <div>$90.57</div>
            </div>
          </div>

          <Link to={"/checkout"}>
            <div className="bg-color-primary rounded-lg text-center mx-4">
              <button className="py-[0.62rem] text-color-bright ">
                Proceed to Checkout
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
