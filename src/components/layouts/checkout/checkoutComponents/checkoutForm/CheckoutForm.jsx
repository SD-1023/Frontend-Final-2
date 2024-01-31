import React, { useEffect, useState } from "react";
import AddressAccordion from "./AddressAccordion";
import PaymentAccordion from "./PaymentAccordion";
import { Link, useNavigate } from "react-router-dom";
import useApi from "../../../../hooks/useApi";
import { useAuth } from "../../../../contexts/AuthContext";

export default function CheckoutForm() {
  const [expanded, setExpanded] = useState(false);
  const { post, data, error } = useApi();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    } else {
      post(`/orders/${user.userId}`, {}, user.sessionId);
    }
  }, [post]);

  const placeOrder = () => {
    setOrder("order");
  };

  useEffect(() => {
    if (error) {
      setOrder("error");
    }
  }, [error]);

  return (
    <div className="sm:w-7/12 max-w-[44rem]">
      <AddressAccordion handleChange={handleChange} expanded={expanded} />
      <PaymentAccordion handleChange={handleChange} expanded={expanded} />
      <div className="mt-4 sm:mt-8 text-sm font-semibold flex justify-between">
        <Link
          to={"/cart"}
          className="underline text-color-primary py-[0.6rem] px-[0.6rem] sm:px-[1.6rem] "
        >
          Back to Cart
        </Link>
        <Link
          onClick={placeOrder}
          order={order}
          className="text-color-bright rounded-lg bg-color-primary py-[0.6rem] px-[1.25rem] sm:px-[3.25rem]"
        >
          Place order
        </Link>
      </div>
    </div>
  );
}
