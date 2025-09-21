"use client";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Order from "./pages/Order";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Carrousel from "./components/Carrousel";

export default function App() {
  return (
    <>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}
