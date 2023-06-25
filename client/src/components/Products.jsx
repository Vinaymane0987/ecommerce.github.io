import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className=" py-10">
      <div className=" flex flex-col items-center gap-4">
        <h1 className="text-2xl text-black py-2 w-80 text-center">
          Shopping Everday
        </h1>
        <span className=" w-40 h-[2px] bg-black "></span>
      </div>
      <div className=" max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-20">
        {products.map((item) => {
          return <ProductCard key={item._id} product={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
