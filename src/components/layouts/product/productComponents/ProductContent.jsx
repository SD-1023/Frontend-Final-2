import React, { useEffect, useState } from "react";
import Icon from "../../../shared-components/Icon";

export default function ProductContent({ info }) {
  const [quantity, setQuantity] = useState(0);
  // const {id} = useParams();
  // const { post, data } = useApi();
  // const [card , setCard] = useState();
  // useEffect(() => {
  //     post(`/cart/:id`,{authorizationa:'token'})
  //   }, [post, id]);

  // const addToBag = async (id)=>{
  //     setCard(data);
  // }

  return (
    <div>
      <div className="py-[0.88rem] md:pl-4 ">
        <h2 className="text-base leading-5 font-medium text-color-typeHighEmphasis ">
          {info.name}
        </h2>
        <p className="text-sm text-color-typeLowEmphasis">{info.category}</p>
        <div className="pt-[0.62rem] pb-4 flex">
          <span className="pr-3 font-semibold text-color-typeHighEmphasis text-xl">
            ${info.price}
          </span>
          {info.price !== info.finalPrice && (
            <>
              <del className="pr-2 text-color-typeLowEmphasis text-sm">
                ${info.finalPrice}
              </del>
              <span className="text-color-error text-sm">{info.offer}%OFF</span>
            </>
          )}
        </div>
        <div className="md:flex items-center hidden leading-[2.62rem]">
          <h3 className="pr-4 font-semibold text-xl leading-6">Quantity: </h3>
          <div className="rounded h-[1.875rem] w-[4.5rem] flex items-center border border-color-primary">
            <div
              onClick={() => {
                if (quantity !== 0) {
                  setQuantity(quantity - 1);
                }
              }}
              className=" hover:cursor-pointer"
            >
              <Icon name={"minus"} />
            </div>
            <span className="px-1 mt-[.1rem]">{quantity}</span>
            <div
              onClick={() => {
                setQuantity(quantity + 1);
              }}
              className=" hover:cursor-pointer"
            >
              <Icon name={"plus"} />
            </div>
          </div>
        </div>

        <div className="flex flex-row md:hidden">
          <div className="bg-color-accent px-[0.8rem] rounded flex items-center font-semibold">
            {info.averageRating || "4.6"}
            <Icon name={"star"} className={"w-5 ml-1"} />
          </div>
          <div className="pl-[0.87rem] flex flex-col">
            <p className="font-semibold text-sm">Average Rating</p>
            <p className="text-sm text-color-typeLowEmphasis">
              43 Rating and 40 Reviews
            </p>
          </div>
        </div>
        <div className="py-4 md:pt-10 flex md:text-sm gap-2">
          <button className="rounded-lg flex items-center justify-center bg-color-primary text-color-bright w-full md:w-7/12 py-[0.63rem]">
            <Icon className="whiteSvg mr-2" name={"bag"} />
            Add To Bag
          </button>
          <button className="rounded-lg hidden md:flex items-center justify-center border border-color-primary w-5/12">
            <Icon className="mr-2 w-6" name={"wishlist"} />
            <span className="leading-6 font-semibold text-color-primary">
              Add To WishList
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
