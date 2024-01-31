export default function OrderDetails({className,items}) {

    let subTotal = 0 ;
    let discount = 0;
    let grandTotal = 0 ;

  for (let i = 0; i < items?.length; i++){
    subTotal+=items[i].finalPrice * items[i].quantity;
    discount+=items[i].product_price - items[i].finalPrice;
       
  }

      grandTotal= subTotal+12;


  return (
    <div className={` ${className?className:'mt-6 sm:mt-12'}`} >
      <h1 className="w-full mb-8 text-left pb-3 mt-3 text-base sm:text-xl leading-[1.625rem] font-semibold text-color-dark border-b border-[#E1E1E1]">
        Order Details
      </h1>
     
      <div className="pr-2">
        <div className="flex justify-between mb-3 font-medium text-sm sm:text-base">
          <span className="text-color-typeLowEmphasis">Sub Total</span>
          <span>${subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-3 font-medium text-sm sm:text-base">
          <span className=" text-color-typeLowEmphasis">Discount</span>
          <span className="font-medium">${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-3 font-medium text-sm sm:text-base">
          <span className="text-color-typeLowEmphasis">Delivery Fee</span>
          <span>$12.00</span>
        </div>
        <div className="flex justify-between mb-3">
          <span className="font-medium sm:font-semibold text-color-typeHighEmphasis">
            Grand Total
          </span>
          <span className="sm:font-semibold">${grandTotal.toFixed(2)}</span>
        </div>
      
      </div>
   
    </div>
  );
}
