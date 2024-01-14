import HomeLayout from "./home/HomeLayout";
import Header from "../glabal/header/Header";
import Footer from "../glabal/footer/Footer";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import BottomNavigation from "../glabal/bottom-nav/BottomNavigation";

export default function AppLayout() {
  return (
    <div className="bg-color-accent">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<HomeLayout />} />
        </Routes>
        <Footer />
        <BottomNavigation />
      </BrowserRouter>
    </div>
  );
}
