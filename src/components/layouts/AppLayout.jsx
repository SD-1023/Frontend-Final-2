import HomeLayout from "./home/HomeLayout";
import Header from "../glabal/header/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import BottomNavigation from "../glabal/bottom-nav/BottomNavigation";
import FooterContainer from "../glabal/footer/FooterContainter";
import CategoryLayout from "./category/CategoryLayout";

export default function AppLayout() {
  return (
    <div className="bg-color-accent">
      <BrowserRouter basename="/Frontend-Final-2">
        <Header />
        <Routes>
          <Route index element={<HomeLayout />} />
          <Route path="/category/:id" element={<CategoryLayout />} />
        </Routes>
        <FooterContainer />
        <BottomNavigation />
      </BrowserRouter>
    </div>
  );
}
