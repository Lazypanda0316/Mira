import React from "react";
import logo from "../../assets/images/logo.png";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";

export const Header = () => {
  return (
    <header className="bg-[#FAF6F2] h-[179px] w-full flex items-center justify-between px-8">
      <div className="flex items-center gap-4"></div>

      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" className="h-12 w-auto mb-1" />
        <nav className="flex gap-10 text-sm text-neutral-800 mt-7">
          <a NavLink to="#">Home</a>
          <a NavLink to="#">About Us</a>
          <a NavLink to="#">Products</a>
          <a NavLink to="#">Catering </a>
          <a NavLink to="#">Gift Box</a>
          <a NavLink to="#">Contact Us</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <FaRegUser size='28' className="text-tan font-bold" />
        <IoIosSearch size='28' className="text-tan font-bold" />
        <RiShoppingBagLine size='30' className="text-tan" />
      </div>
    </header>
  );
};
