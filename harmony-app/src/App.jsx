import { Routes, Route } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Team from "@/pages/Team";
import HarmonyStore from "@/pages/HarmonyStore";
import Register from "@/pages/connexion/Register";
import Login from "@/pages/connexion/Login";
import ForgotPassword from "@/pages/connexion/ForgotPassword";
import Order from "@/pages/Order";
import Guitare from "@/pages/articles/Guitare";

export default function App() {
  return (
    <Routes>
      {/* Routes avec layout (Header + Nav + footer) */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/harmony-store" element={<HarmonyStore />} />
        <Route path="/guitare" element={<Guitare />} />
        {/* Auth sous le même layout pour garder Header/Nav/Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* Optionnel: 404 */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}