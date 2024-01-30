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
import CheckoutLayout from "./checkout/CheckoutLayout";
import CartLayout from "./cart/CartLayout";
import SearchProductsGrid from "../shared-components/productsGrid/SearchProductsGrid";
import SearchProvider from "../contexts/SearchContext";
export default function AppLayout() {
  return (
    <div className="bg-color-bright flex flex-col justify-between min-h-[100vh]">
      <BrowserRouter basename="/Frontend-Final-2">
        <CategoriesContext>
          <SearchProvider>
            <div>
              <Header />
              <Routes>
                <Route index element={<HomeLayout />} />
                <Route
                  path="/category/:category"
                  element={<CategoryLayout />}
                />
                <Route
                  path="/search"
                  element={
                    <div className="p-4">
                      <SearchProductsGrid />
                    </div>
                  }
                />
                <Route path="/product/:id" element={<ProductLayout />} />
                <Route path="/checkout" element={<CheckoutLayout />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/cart" element={<CartLayout />} />
              </Routes>
            </div>
            <FooterContainer />
            <BottomNavigation />
          </SearchProvider>
        </CategoriesContext>
      </BrowserRouter>
    </div>
  );
}
