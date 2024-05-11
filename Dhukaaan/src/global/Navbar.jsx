import React from "react";
import Dhukaan from "../assets/Png/Logo.png";
import { LiaShoppingCartSolid } from "react-icons/lia";
const Navbar = () => {
  return (
    <nav className="flex justify-around bg-[#FFF7F1]">
      <div className="w-20 m-2 cursor-pointer">
        <img src={Dhukaan} alt="Logo" />
      </div>
      <div className=" flex gap-5 items-center">
        <p className="Menu">Home</p>
        <p className="Menu">Men</p>
        <p className="Menu">Women</p>
        <p className="Menu">Kids</p>
        <p className="Menu">Accessories</p>
      </div>
      <div className="m-2 gap-5 flex justify-center items-center">
        <button className="Login ">Login</button>
        <LiaShoppingCartSolid className="text-3xl cursor-pointer hover:scale-105 transition-all ease-in-out duration-150" />
      </div>
    </nav>
  );
};

export default Navbar;
