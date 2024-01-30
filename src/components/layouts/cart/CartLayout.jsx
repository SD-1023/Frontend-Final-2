import React, { useEffect, useState } from 'react'
import UserCart from './UserCart';
import MyBreadcrumbs from "../../shared-components/MyBreadcrumbs";
import OrderDetails from '../checkout/checkoutComponents/summary/OrderDetails';
import CartButtons from './CartButtons';
import { useAuth } from '../../contexts/AuthContext';
import useApi from '../../hooks/useApi';

export default function CartLayout() {

  const [items, setItems] = useState([]);
  const { get, data } = useApi();
  const {user} = useAuth();

  useEffect(() => {
    get(`/cart/${user.userId}`,user.sessionId);
  }, [get,user.userId]);

  useEffect(() => {
    console.log(data)
    if(data.message === 'success'){
    setItems(data?.cartItems);
  }
    
  }, [data]);

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
          {items[0]? (
          <div className="flex sm:flex-row flex-col justify-between ">
            <UserCart items={items} />
            <div className='md:w-4/12 sm:w-5/12'  >
            <OrderDetails className='mt-0 ' />
            <CartButtons />
            </div>
          </div>
          ):<div className='text-center mb-20'>
             <div className='flex justify-center'>
             <img src='/Frontend-Final-2/assets/images/carterrors.png' />
             </div>
            <p className='font-bold text-[1.75rem]'>Uh Oh...!</p>
            <p>You haven't added any items. Start shopping to make your bag bloom</p>
            </div>}
        </div>
      );
}
