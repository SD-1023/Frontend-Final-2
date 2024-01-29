import React, { useState } from "react";
import AddressAccordion from "./AddressAccordion";
import PaymentAccordion from "./PaymentAccordion";
import { Link } from "react-router-dom";

export default function CheckoutForm() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
          to={"/"}
          className="text-color-bright rounded-lg bg-color-primary py-[0.6rem] px-[1.25rem] sm:px-[3.25rem]"
        >
          Place order
        </Link>
      </div>
    </div>
  );
}
