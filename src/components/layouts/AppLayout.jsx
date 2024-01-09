import React from 'react'
import HomeLayout from './home/HomeLayout'
import Navbar from '../glabal/navbar/Navbar'
import Footer from '../glabal/footer/Footer'
import { Route,BrowserRouter,Routes } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route index element={<HomeLayout />}/>
      </Routes>
      <Footer />
      </BrowserRouter>

    </>
  )
}
