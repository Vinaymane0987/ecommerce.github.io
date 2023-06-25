import React from "react";
import { logo3 } from "../assets/index";
import { ShoppingCart } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.vinsClub.productData);
  const userInfo = useSelector((state) => state.vinsClub.userInfo);
  console.log(userInfo);
  return (
    <div className="w-full bg-white h-20 border-b-[1px]  font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex  items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-48" src={logo3} alt="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              home
            </li>
            <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div>
              <ShoppingCart />
              <span className="w-6 absolute top-4 right-29 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <Avatar className=" w-8 h-8" src={userInfo ? userInfo.image : ""} />
          </Link>
          {userInfo ? (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
