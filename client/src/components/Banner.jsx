import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { banner3, banner1, banner2 } from "../assets/index";
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  //   "https://images.pexels.com/photos/5705478/pexels-photo-5705478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  const data = [
    banner3,
    banner1,
    banner2,
    "https://cdn.pixabay.com/photo/2017/01/18/17/14/girl-1990347_1280.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className=" w-full h-auto overflow-x-hidden">
      <div className=" w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className=" w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className=" w-screen h-full object-cover"
            src={data[0]}
            alt="imgone"
            loading="priority"
          />
          <img
            className=" w-screen h-full object-cover"
            src={data[1]}
            alt="imgone"
            loading="priority"
          />
          <img
            className=" w-screen h-full object-cover"
            src={data[2]}
            alt="imgone"
            loading="priority"
          />
          <img
            className=" w-screen h-full object-cover"
            src={data[3]}
            alt="imgone"
            loading="priority"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto  flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className=" w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <ArrowBackRounded />
          </div>
          <div
            onClick={nextSlide}
            className=" w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <ArrowForwardRounded />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
