import OrderDetails from "./OrderDetails";

export default function OrderSummary() {
  return (
    <div className=" sm:w-5/12 lg:w-[25.6875rem] mb-5 sm:mb-28 sm:ml-5 lg:ml-12">
      <h1 className="w-full text-left pb-3 mt-3 text-base sm:text-xl leading-[1.625rem] font-semibold text-color-dark border-b border-[#E1E1E1]">
        Order Summary
      </h1>
      <div className="flex mt-4 sm:mt-8">
        <img
          className="w-20 rounded-lg"
          src="/Frontend-Final-2/assets/images/bag-thumbnail.png"
          alt=""
        />
        <div className="ml-4 flex flex-col text-base">
          <span className=" text-color-typeHighEmphasis leading-[1.25rem] font-medium">
            Coach
          </span>
          <span className="my-2 leading-[1.25rem] text-color-typeLowEmphasis">
            Leather Coach Bag
          </span>
          <span className=" text-color-typeLowEmphasis leading-[1.25rem]">
            Qty- {1}
          </span>
        </div>
      </div>
      <div className="flex mt-8">
        <img
          className="w-20 rounded-lg"
          src="/Frontend-Final-2/assets/images/bag-thumbnail.png"
          alt=""
        />
        <div className="ml-4 flex flex-col text-base">
          <span className=" text-color-typeHighEmphasis leading-[1.25rem] font-medium">
            Coach
          </span>
          <span className="my-2 leading-[1.25rem] text-color-typeLowEmphasis">
            Leather Coach Bag
          </span>
          <span className=" text-color-typeLowEmphasis leading-[1.25rem]">
            Qty- {1}
          </span>
        </div>
      </div>
      <OrderDetails />
    </div>
  );
}
