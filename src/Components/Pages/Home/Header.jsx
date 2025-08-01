import React from "react";
// import "./Header.css"
import { FaRegBell } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import logo1 from "../../../assets/logo1.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white header px-4 py-2">
      <div>
        <img className="h-14 w-40" src={logo} alt="Xmoveit Logo" />
      </div>
      <div className="flex items-center gap-x-4">
        <div className="relative">
          <FaRegBell className="text-xl text-gray-600 cursor-pointer hover:text-gray-800" />
        </div>
        <div className="flex items-center gap-x-2">
          <img
            className="h-8 w-8 rounded-full object-cover"
            src={logo1}
            alt="Profile"
          />
          <h2 className="text-sm font-medium text-gray-800">Robert Smith</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
