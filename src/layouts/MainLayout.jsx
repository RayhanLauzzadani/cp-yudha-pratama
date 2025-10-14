import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      {/* <div className="h-16" /> */}
      <Outlet />
    </>
  );
}
