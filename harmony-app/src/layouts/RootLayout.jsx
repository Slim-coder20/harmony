import Header from "@/components/Header";
import FooterFixed from "@/components/FooterFixed";
import Nav from "@/components/Nav";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <FooterFixed />
    </>
  );
}
