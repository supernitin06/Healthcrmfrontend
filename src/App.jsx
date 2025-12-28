import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
