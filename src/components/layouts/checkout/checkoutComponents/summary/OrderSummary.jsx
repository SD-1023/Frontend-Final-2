import OrderDetails from "./OrderDetails";

export default function OrderSummary({ items }) {
  return (
    <div className=" sm:w-5/12 lg:w-[25.6875rem] mb-5 sm:mb-28 sm:ml-5 lg:ml-12">
      <h1 className="w-full text-left pb-3 mt-3 text-base sm:text-xl leading-[1.625rem] font-semibold text-color-dark border-b border-[#E1E1E1]">
        Order Summary
      </h1>
      {items?.map((item) => (
        <div className="flex mt-4 sm:mt-8">
          <img className="w-20 rounded-lg" src={item.image_secure_url} alt="" />
          <div className="ml-4 flex flex-col text-base">
            <span className=" text-color-typeHighEmphasis leading-[1.25rem] font-medium">
              {item.product_name}
            </span>
            <span className="my-2 leading-[1.25rem] text-color-typeLowEmphasis">
              {item.product_name}
            </span>
            <span className=" text-color-typeLowEmphasis leading-[1.25rem]">
              Qty- {item.quantity}
            </span>
          </div>
        </div>
      ))}

      <OrderDetails items={items} />
    </div>
  );
}
