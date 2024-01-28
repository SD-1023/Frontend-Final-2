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
import Cart from "./cart/Cart.jsx";
export default function AppLayout() {
  return (
    <div className="bg-color-bright min-h-[100vh]">
      <BrowserRouter basename="/Frontend-Final-2">
        <CategoriesContext>
          <Header />
          <Routes>
            <Route index element={<HomeLayout />} />
            <Route path="/category/:category" element={<CategoryLayout />} />
            <Route path="/search/:term" element={<ProductsGrid />} />
            <Route path="/product/:id" element={<ProductLayout />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/cart/:user_id" element={<Cart /> } />
          </Routes>
          <FooterContainer />
          <BottomNavigation />
        </CategoriesContext>
      </BrowserRouter>
    </div>
  );
}
