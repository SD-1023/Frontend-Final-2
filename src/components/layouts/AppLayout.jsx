import HomeLayout from "./home/HomeLayout";
import Header from "../glabal/header/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import BottomNavigation from "../glabal/bottom-nav/BottomNavigation";
import FooterContainer from "../glabal/footer/FooterContainter";
import CategoryLayout from "./category/CategoryLayout";
import CategoriesContext from "../contexts/CategoriesContext";
import ProductsGrid from "../shared-components/productsGrid/ProductsGrid";
import ProductLayout from "./product/ProductLayout";
import SignUpPage from "./users/SignUpPage";
import SignInPage from "./users/SignInPage";
import CheckoutLayout from './checkout/CheckoutLayout'
import CartLayout from "./cart/CartLayout";
import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import { useAuth } from "../contexts/AuthContext";
export default function AppLayout() {
  const [items, setItems] = useState([]);
  const { get, data } = useApi();
  const {user} = useAuth();


  useEffect(() => {

   
    if(user){
      get(`/cart/${user.userId}`,user.sessionId);
    }
  }, [get,user]);

  useEffect(() => {
    if(data.message === 'success'){
    setItems(data?.cartItems);
    console.log(cartItems)
  }
    
  }, [data]);

  return (
    <div className="bg-color-bright min-h-[100vh]">
      <BrowserRouter basename="/Frontend-Final-2">
        <CategoriesContext>
          <Header />
          <Routes>
            <Route index element={<HomeLayout />} />
            <Route path="/category/:category" element={<CategoryLayout />} />
            <Route
              path="/search/:term"
              element={
                <div className="p-4">
                  <ProductsGrid />
                </div>
              }
            />
            <Route path="/product/:id" element={<ProductLayout />} />
            <Route path="/checkout" element={<CheckoutLayout items={items} />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/cart" element={<CartLayout items={items} setItems={setItems}/> } />
          </Routes>
          <FooterContainer />
          <BottomNavigation />
        </CategoriesContext>
      </BrowserRouter>
    </div>
  );
}
