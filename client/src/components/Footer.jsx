import React from "react";
import { logo3 } from "../assets";
import {
  CheckOutlined,
  Facebook,
  GitHub,
  Help,
  Instagram,
  Person2Rounded,
  TrackChanges,
  Twitter,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className=" py-20 font-titleFont">
      <hr className=" mx-20" />
      <div className=" max-w-screen-xl mx-auto pt-12 grid grid-cols-4">
        <div className="flex flex-col gap-4">
          <img className=" w-48" src={logo3} alt="logo3" />
          <p>©. All Rights are reserved</p>
          {/* <div className=" flex gap-4">
            <PaymentRounded />
            <LocalAtmRounded />
            <CurrencyExchangeRounded />
            <PaidRounded />
            <CardMembershipRounded />
          </div> */}
          <div className=" flex gap-4">
            <Instagram className=" hover:text-gray-500 duration-300 cursor-pointer" />
            <Facebook className=" hover:text-gray-500 duration-300 cursor-pointer" />
            <Twitter className=" hover:text-gray-500 duration-300 cursor-pointer" />
            <GitHub className=" hover:text-gray-500 duration-300 cursor-pointer" />
            <YouTube className=" hover:text-gray-500 duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className=" text-2xl text-black mb-4 font-semibold">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Athani, Belgaum 591234</p>
            <p>mobile: 9373088106</p>
            <p>landline: 0833 9277464</p>
            <p>email: vinumane0987@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className=" text-2xl text-black mb-4 font-semibold">Profile</h2>
          <div className="flex flex-col gap-2">
            <p className="flex gap-3 items-center hover:text-gray-500 duration-300 cursor-pointer">
              <Person2Rounded />
              My Account
            </p>
            <p className="flex gap-3 items-center hover:text-gray-500 duration-300 cursor-pointer">
              <CheckOutlined />
              Checkout
            </p>
            <p className="flex gap-3 items-center hover:text-gray-500 duration-300 cursor-pointer">
              <TrackChanges />
              Order Tracking
            </p>
            <p className="flex gap-3 items-center hover:text-gray-500 duration-300 cursor-pointer">
              <Help />
              help & Support
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="email"
            className=" px-4 py-2 bg-transparent border-b rounded-sm mb-4 font-semibold outline-none"
          />
          <button className="bg-transparent border rounded-md py-2 font-semibold hover:bg-gray-300 duration-300 active:bg-white cursor-pointer">
            SubScribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
