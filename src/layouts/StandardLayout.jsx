import { Outlet } from "react-router-dom";
import { useState } from "react";
import Side from "../components/Side";
import Navbar from "../components/Navbar";

function StandardLayout() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className="relative">
      <Outlet />
      <Navbar isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
      <Side setIsMenuVisible={setIsMenuVisible} />
    </div>
  );
}

export default StandardLayout;
