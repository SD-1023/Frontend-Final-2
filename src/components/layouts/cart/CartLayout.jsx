import React, { useEffect, useState } from "react";
import UserCart from "./UserCart";
import MyBreadcrumbs from "../../shared-components/MyBreadcrumbs";
import OrderDetails from "../checkout/checkoutComponents/summary/OrderDetails";
import CartButtons from "./CartButtons";
import { useAuth } from "../../contexts/AuthContext";
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CartLayout({ items, setItems }) {
  const { get, data } = useApi();
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      get(`/cart/${user.userId}`, user.sessionId);
    }
  }, [get, user]);

  useEffect(() => {
    if (data?.message === "success") {
      setItems(data.cartItems);
    }
  }, [data]);

  const handleRemoveCart = async (id) => {
    if (!user) {
      navigate("/signin");
    } else {
      await axios({
        method: "DELETE",
        url: "http://161.156.81.77:4000/cart",
        headers: {
          "Content-Type": "application/json",
          Authorization: user.sessionId,
        },
        data: {
          userId: user.userId,
          productId: id,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.message === "success") {
            updateItemsAfterDeletion(id);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const breads = [
    {
      page: "Home",
      path: "/",
    },
    {
      page: "Cart",
      path: "#",
    },
  ];

  const updateItemsAfterDeletion = (id) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product_id !== id)
    );
  };

  return (
    <div className="p-4 relative">
      <>
        <div className="hidden sm:block">
          <MyBreadcrumbs pathnames={breads} />
        </div>
        <h1 className="text-[1.5rem] sm:text-[2.125rem] mb-[2.5rem] font-semibold leading-[2.75rem] text-color-primary">
          My Cart
        </h1>
        {items[0] ? (
          <div className="flex sm:flex-row flex-col justify-between ">
            <UserCart items={items} handleRemoveCart={handleRemoveCart} />
            <div className="md:w-4/12 sm:w-5/12 ml-3">
              <OrderDetails items={items} className="mt-0 " />
              <CartButtons items={items} />
            </div>
          </div>
        ) : (
          <div className="text-center mb-20">
            <div className="flex justify-center">
              <img
                alt="cart error"
                src="/Frontend-Final-2/assets/images/carterrors.png"
              />
            </div>
            <p className="font-bold text-[1.75rem]">Uh Oh...!</p>
            <p>
              You haven't added any items. Start shopping to make your bag bloom
            </p>
          </div>
        )}
      </>
    </div>
  );
}
