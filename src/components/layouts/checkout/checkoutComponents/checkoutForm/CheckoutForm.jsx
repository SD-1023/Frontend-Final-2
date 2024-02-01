import { useEffect, useState } from "react";
import AddressAccordion from "./AddressAccordion";
import PaymentAccordion from "./PaymentAccordion";
import { Link, useNavigate } from "react-router-dom";
import useApi from "../../../../hooks/useApi";
import { useAuth } from "../../../../contexts/AuthContext";

export default function CheckoutForm({
  setAddress,
  handleSubmit,
  addNewAddress,
  setFormData,
}) {
  const [expanded, setExpanded] = useState(false);

  const { post, data } = useApi();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/signin");
  } else {
  }

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="sm:w-7/12 max-w-[44rem]">
      <AddressAccordion
        setFormData={setFormData}
        handleChange={handleChange}
        addNewAddress={addNewAddress}
        expanded={expanded}
      />
      <PaymentAccordion handleChange={handleChange} expanded={expanded} />
      <div className="mt-4 sm:mt-8 text-sm font-semibold flex justify-between">
        <Link
          to={"/cart"}
          className="underline text-color-primary py-[0.6rem] px-[0.6rem] sm:px-[1.6rem] "
        >
          Back to Cart
        </Link>
        <button
          onClick={handleSubmit}
          className="text-color-bright rounded-lg bg-color-primary py-[0.6rem] px-[1.25rem] sm:px-[3.25rem]"
        >
          Place order
        </button>
      </div>
    </div>
  );
}
