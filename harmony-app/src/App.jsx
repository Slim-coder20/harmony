"use client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Home from "./pages/Home";



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        {/* Ajoute d'autres routes ici */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
