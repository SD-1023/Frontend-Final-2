import { useState } from "react";
import PaymentOption from "./PaymentOption";

export default function PaymentOptions() {
  const [checkedOption, setCheckedOption] = useState(1);

  const options = [
    {
      id: 1,
      image: "upi.png",
      title: "UPI",
    },
    {
      id: 2,
      image: "credit.png",
      title: "Credit/Debit Card",
    },
    {
      id: 3,
      image: "apple-pay.png",
      title: "Apple Pay",
    },
    {
      id: 4,
      image: "amazon-pay.png",
      title: "Amazon Pay",
    },
  ];

  return (
    <form className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {options.map((option) => (
        <PaymentOption
          title={option.title}
          id={option.id}
          image={option.image}
          setCheckedOption={setCheckedOption}
          checkedOption={checkedOption}
        />
      ))}
    </form>
  );
}
