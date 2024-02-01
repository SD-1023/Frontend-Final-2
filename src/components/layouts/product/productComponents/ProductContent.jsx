import { useEffect, useState } from "react";
import Icon from "../../../shared-components/Icon";
import useApi from "../../../hooks/useApi";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router";
import MySnackbar from "../../../shared-components/MySnackbar";
import Buttons from "./Buttons";

export default function ProductContent({ productId, info }) {
  const [quantity, setQuantity] = useState(1);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { post, data, error } = useApi();
  const [snackbarState, setSnackbarState] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleAddToCart = () => {
    if (!user) {
      navigate("/signin");
    } else {
      post(
        "/cart",
        {
          userId: user.userId,
          quantity: quantity,
          productId: productId,
        },
        user.sessionId
      );
    }
  };
  useEffect(() => {
    if (data?.message === "success") {
      setSnackbarState(true);
      setSnackbarMessage("Product added to your cart!");
    }
  }, [data]);
  useEffect(() => {
    if (error) {
      setSnackbarMessage(error);
      setSnackbarState(true);
    }
  }, [error]);

  return (
    <div>
      <MySnackbar
        open={snackbarState}
        setOpen={setSnackbarState}
        messege={snackbarMessage}
      />
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
                if (quantity !== 1) {
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
                if (quantity < 999) {
                  setQuantity(quantity + 1);
                }
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
        <Buttons handleAddToCart={handleAddToCart} productId={productId} />
      </div>
    </div>
  );
}
