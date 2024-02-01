import React, { useEffect } from "react";
import Icon from "../../../shared-components/Icon";
import { useNavigate } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import { useAuth } from "../../../contexts/AuthContext";
import { useWishlistContext } from "../../../contexts/WishlistContext";

export default function Buttons({ handleAddToCart, productId }) {
  const navigate = useNavigate();
  const { post, data } = useApi(); // Assuming 'post' is similar to your 'wishPost'
  const { user } = useAuth();
  const { setWishListProducts } = useWishlistContext();

  useEffect(() => {
    if (data?.message === "success") {
      setWishListProducts(data.wishlist);
    }
  }, [data, setWishListProducts]);

  const addToWishList = (productId) => {
    if (!user) {
      navigate("/signin");
    } else {
      post("/wishlist", { userId: user.userId, productId }, user.sessionId);
    }
  };
  return (
    <div className="py-4 md:pt-10 flex md:text-sm gap-2">
      <button
        onClick={handleAddToCart}
        className="rounded-lg flex items-center justify-center bg-color-primary text-color-bright w-full md:w-7/12 py-[0.63rem]"
      >
        <Icon className="whiteSvg mr-2" name={"bag"} />
        Add To Bag
      </button>
      <button
        onClick={() => {
          console.log("button");
          addToWishList(productId);
        }}
        className="rounded-lg hidden md:flex items-center justify-center border border-color-primary w-5/12"
      >
        <Icon className="mr-2 w-6" name={"wishlist"} />
        <span className="leading-6 font-semibold text-color-primary">
          Add To WishList
        </span>
      </button>
    </div>
  );
}
