import React, { useState } from "react";
import Dhukaan from "../../assets/Png/Logo.png";
import { LiaShoppingCartSolid } from "react-icons/lia";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  return (
    <nav className="flex justify-around bg-[#FCC8D4]">
      <div className="w-20 m-2 cursor-pointer">
        <img src={Dhukaan} alt="Logo" />
      </div>
      <div className="flex gap-5 items-center">
        <p onClick={() => setActive("Home")} className="Menu">
          Home
          <hr
            className={
              active === "Home"
                ? "border-t-2 border-t-[#550022] border-solid;"
                : "hidden"
            }
          />
        </p>
        <p onClick={() => setActive("Men")} className="Menu">
          Men
          <hr
            className={
              active === "Men"
                ? "border-t-2 border-t-[#550022] border-solid;"
                : "hidden"
            }
          />
        </p>
        <p onClick={() => setActive("Women")} className="Menu">
          Women
          <hr
            className={
              active === "Women"
                ? "border-t-2 border-t-[#550022] border-solid;"
                : "hidden"
            }
          />
        </p>
        <p onClick={() => setActive("Kids")} className="Menu">
          Kids
          <hr
            className={
              active === "Kids"
                ? "border-t-2 border-t-[#550022] border-solid;"
                : "hidden"
            }
          />
        </p>
        <p onClick={() => setActive("Accessories")} className="Menu">
          Accessories
          <hr
            className={
              active === "Accessories"
                ? "border-t-2 border-t-[#550022] border-solid;"
                : "hidden"
            }
          />
        </p>
      </div>
      <div className="m-2 gap-5 flex justify-center items-center">
        <button className="Login">Login</button>
        <LiaShoppingCartSolid className="text-3xl cursor-pointer hover:scale-105 transition-all ease-in-out duration-150" />
        <p className="cart-count">0</p>
      </div>
    </nav>
  );
};

export default Navbar;