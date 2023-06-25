import { StarRounded, StartRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/vinsClubSlice";
import { ToastContainer, toast } from "react-toastify";

const SingleProduct = () => {
  const [details, setDetails] = useState({});
  const dispatch = useDispatch();
  const [baseQuantity, setBaseQuantity] = useState(1);
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div className=" max-w-screen-xl mx-auto my-10 flex gap-10">
      <div className="w-2/5 relative">
        <img
          className="w-full h-[550px] object-cover"
          src={details.image}
          alt="productImg"
        />
        <div className="absolute top-4 right-0">
          {details.isNew && (
            <p className=" bg-black text-white font-semibold font-titleFont px-6 py-1">
              Sale
            </p>
          )}
        </div>
      </div>
      <div className="w-3/5 flex flex-col justify-center gap-12">
        <div>
          <h2 className="text-4xl font-semibold">{details.title}</h2>
          <div className="flex items-center gap-4 mt-3">
            <p className="line-through text-gray-500">${details.oldPrice}</p>
            <p className=" font-semibold">${details.price}</p>
          </div>
        </div>
        <div className=" flex items-center gap-2 text-base">
          <div className="flex">
            <StarRounded />
            <StarRounded />
            <StarRounded />
            <StarRounded />
            <StarRounded />
          </div>
          <p className=" text-xs text-gray-500">(1 Customer Review)</p>
        </div>
        <p className="text-base text-gray-500 -mt-3">{details.description}</p>
        <div className="flex gap-4">
          <div className="w-52 flex items-center justify-between gap-4 text-gray-500 border p-3">
            <p className="text-sm">Quantity</p>
            <div className="flex items-center gap-4 text-sm font-semibold">
              <button
                onClick={() =>
                  setBaseQuantity(
                    baseQuantity === 1 ? (baseQuantity = 1) : baseQuantity - 1
                  )
                }
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                -
              </button>
              <span>{baseQuantity}</span>
              <button
                onClick={() => setBaseQuantity(baseQuantity + 1)}
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQuantity,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} is added to cart`)
              }
              className="bg-black text-white py-3 px-6 active:bg-gray-700"
            >
              add to cart
            </button>
          </div>
        </div>
        <p className="text-base text-gray-500">
          Category :{" "}
          <span className=" font-medium capitalize">{details.category}</span>
        </p>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default SingleProduct;
