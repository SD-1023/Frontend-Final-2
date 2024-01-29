import React from 'react'
import UserCart from './UserCart';
import MyBreadcrumbs from "../../shared-components/MyBreadcrumbs";
import OrderDetails from '../checkout/checkoutComponents/summary/OrderDetails';

export default function CartLayout() {
    const breads = [
        {
          page: "Home",
          path: "/",
        },
        {
          page: "cart",
          path: "#",
        },
      ];
      return (
        <div className="p-4">
          <div className="hidden sm:block">
            <MyBreadcrumbs pathnames={breads} />
          </div>
          <h1 className="text-[1.5rem] sm:text-[2.125rem] mb-[2.5rem] font-semibold leading-[2.75rem] text-color-primary">
            My Cart
          </h1>
          <div className="flex sm:flex-row flex-col-reverse justify-between">
            <UserCart />
            <OrderDetails className='mt-0 sm:w-3/12'/>
          </div>
        </div>
      );
}
