import { useEffect, useState } from "react";
import MyBreadcrumbs from "../../shared-components/MyBreadcrumbs";
import CheckoutForm from "./checkoutComponents/checkoutForm/CheckoutForm";
import OrderSummary from "./checkoutComponents/summary/OrderSummary";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useApi from "../../hooks/useApi";
import axios from "axios";

export default function CheckoutLayout({ items }) {
  const [address, setAddress] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    FullName: "",
    mobileNumber: "",
  });
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const { post, data } = useApi();
  const { user } = useAuth();
  const navigate = useNavigate();
  const addNewAddress = (address) => {
    if (user) {
      post(
        "/addresses",
        {
          FullName: address.firstName + address.lastName,
          email: address.email,
          userId: user.userId,
          country: "Palestine",
          street: "falasten",
          city: "Nablus",
          state: "Westbank",
          postal_code: "213dcedce12e",
          countryCallingCode: "972",
        },
        user.sessionId
      );
    } else {
      navigate("/signin");
    }
  };
  useEffect(() => {
    const order = async () => {
      //    post(`/orders/${user.userId}`, {}, user.sessionId);

      await axios({
        method: "POST",
        url: `http://161.156.81.77:4000/orders/${user.userId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: user.sessionId,
        },
        data: {},
      })
        .then((res) => {
          console.log(res);
          if (res.data.message === "success") {
            alert("Your order is ready now! Just wait for it");
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (data?.message === "success") {
      order();
    }
  }, [data]);

  const handleSubmit = () => {
    addNewAddress(formData);
  };

  const breads = [
    {
      page: "Home",
      path: "/",
    },
    {
      page: "Checkout",
      path: "#",
    },
  ];
  return (
    <div className="p-4">
      <div className="hidden sm:block">
        <MyBreadcrumbs pathnames={breads} />
      </div>
      <h1 className="text-[1.5rem] sm:text-[2.125rem] mb-[2.5rem] font-semibold leading-[2.75rem] text-color-primary">
        Checkout
      </h1>
      <div className="flex sm:flex-row flex-col-reverse justify-between">
        <CheckoutForm
          setFormData={setFormData}
          addNewAddress={addNewAddress}
          handleSubmit={handleSubmit}
          setAddress={setAddress}
        />
        <OrderSummary items={items} />
      </div>
    </div>
  );
}
