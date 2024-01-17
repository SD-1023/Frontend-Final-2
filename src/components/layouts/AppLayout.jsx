import HomeLayout from "./home/HomeLayout";
import Header from "../glabal/header/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import BottomNavigation from "../glabal/bottom-nav/BottomNavigation";
import FooterContainer from "../glabal/footer/FooterContainter";

export default function AppLayout() {
  return (
    <div className="bg-color-bright">
      <BrowserRouter basename="/Frontend-Final-2">
        <Header />
        <Routes>
          <Route index element={<HomeLayout />} />
        </Routes>
        <FooterContainer />
        <BottomNavigation />
      </BrowserRouter>
    </div>
  );
}
