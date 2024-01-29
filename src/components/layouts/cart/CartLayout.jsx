import React from 'react'
import UserCart from './UserCart';
import MyBreadcrumbs from "../../shared-components/MyBreadcrumbs";
import OrderDetails from '../checkout/checkoutComponents/summary/OrderDetails';
import CartButtons from './CartButtons';

export default function CartLayout() {

  // const [Items, setItems] = useState({});
  // const { get, data } = useApi();

  // useEffect(() => {
  //   get(`/cart/${id}`);
  // }, [get, id]);

  // useEffect(() => {
  //   setItems(data?.cartItems);
  // }, [data]);

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
          <div className="flex sm:flex-row flex-col justify-between ">
            <UserCart />
            <div className='md:w-4/12 sm:w-5/12'  >
            <OrderDetails className='mt-0 '/>
            <CartButtons />
            </div>
          </div>
        </div>
      );
}
