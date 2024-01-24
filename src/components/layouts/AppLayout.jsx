import HomeLayout from "./home/HomeLayout";
import Header from "../glabal/header/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import BottomNavigation from "../glabal/bottom-nav/BottomNavigation";
import FooterContainer from "../glabal/footer/FooterContainter";
import CategoryLayout from "./category/CategoryLayout";
import CategoriesContext from "../contexts/CategoriesContext";
import ProductsGrid from "../shared-components/ProductsGrid";
import useDebounce from "../hooks/useDebounce";
import useApi from "../hooks/useApi";
import { useState } from "react";
import ProductLayout from "./product/ProductLayout";

export default function AppLayout() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, get } = useApi();
  const handleSearch = useDebounce((term) => {
    get(`/products?search=${term}`);
    console.log(data);
  }, 500);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    handleSearch(value);
  };
  return (
    <div className="bg-color-bright">
      <BrowserRouter basename="/Frontend-Final-2">
   
        <CategoriesContext>
          <Header handleChange={handleChange} searchTerm={searchTerm} />
          <Routes>
            <Route index element={<HomeLayout />} />
            <Route path="/category/:id" element={<CategoryLayout />} />
            <Route path="/search/:term" element={<ProductsGrid />} />
            <Route path="/product/:id" element={<ProductLayout />} />
          </Routes>
          <FooterContainer />
          <BottomNavigation />
        </CategoriesContext>
       
      </BrowserRouter>
    </div>
  );
}
