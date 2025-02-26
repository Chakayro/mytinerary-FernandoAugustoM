import { Outlet } from "react-router-dom";
import { useState } from "react";
import Bg from "../assets/bg-co.jpg";
import Side from "../components/Side";
import Navbar from "../components/Navbar";

function StandardLayout() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className="relative">
      <img src={Bg} alt="" className="h-dvh w-screen object-cover " />
      <Outlet />
      <Navbar isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
      <Side setIsMenuVisible={setIsMenuVisible} />
    </div>
  );
}

export default StandardLayout;
