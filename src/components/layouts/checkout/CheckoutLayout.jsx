import MyBreadcrumbs from "../../shared-components/MyBreadcrumbs";
import CheckoutForm from "./checkoutComponents/checkoutForm/CheckoutForm";
import OrderSummary from "./checkoutComponents/summary/OrderSummary";

export default function CheckoutLayout({ items }) {
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
        <CheckoutForm />
        <OrderSummary items={items} />
      </div>
    </div>
  );
}
