export default function OrderDetails() {
  return (
    <div className="mt-6 sm:mt-12">
      <h1 className="w-full mb-8 text-left pb-3 mt-3 text-base sm:text-xl leading-[1.625rem] font-semibold text-color-dark border-b border-[#E1E1E1]">
        Order Details
      </h1>
      <div className="pr-2">
        <div className="flex justify-between mb-3 font-medium text-sm sm:text-base">
          <span className="text-color-typeLowEmphasis">Sub Total</span>
          <span>$119.69</span>
        </div>
        <div className="flex justify-between mb-3 font-medium text-sm sm:text-base">
          <span className=" text-color-typeLowEmphasis">Discount</span>
          <span className="font-medium">$119.69</span>
        </div>
        <div className="flex justify-between mb-3 font-medium text-sm sm:text-base">
          <span className="text-color-typeLowEmphasis">Delivery Fee</span>
          <span>$119.69</span>
        </div>
        <div className="flex justify-between mb-3">
          <span className="font-medium sm:font-semibold text-color-typeHighEmphasis">
            Grand Total
          </span>
          <span className="sm:font-semibold">$119.69</span>
        </div>
      </div>
    </div>
  );
}
