import { ArrowLeftRounded, ClearRounded } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
  resetItem,
} from "../redux/vinsClubSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const CartItem = () => {
  const productData = useSelector((state) => state.vinsClub.productData);
  const dispatch = useDispatch();
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className=" font-titleFont text-2xl">shopping cart</h2>
      </div>
      <div>
        {productData.map((item) => {
          return (
            <div
              key={item._id}
              className=" flex items-center justify-between gap-6 mt-6"
            >
              <div className="flex items-center gap-2">
                <ClearRounded
                  onClick={() =>
                    dispatch(deleteItem(item._id)) &
                    toast.error(`${item.title} has been deleted`)
                  }
                  className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                />
                <img
                  className="w-32 h-32 object-cover"
                  src={item.image}
                  alt="itemImg"
                />
              </div>
              <h2 className="w-52">{item.title}</h2>
              <p className="w-10">${item.price}</p>
              <div className="w-52 flex items-center justify-between gap-4 text-gray-500 border p-3">
                <p className="text-sm">Quantity</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <span
                    onClick={() =>
                      dispatch(
                        decreaseQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    -
                  </span>
                  <span>{item.quantity}</span>
                  <span
                    onClick={() =>
                      dispatch(
                        increaseQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    +
                  </span>
                </div>
              </div>
              <p className="w-14 text-gray-500">
                ${item.quantity * item.price}
              </p>
            </div>
          );
        })}
      </div>
      <button
        onClick={() =>
          dispatch(resetItem()) & toast.error("your cart is now empty")
        }
        className=" bg-black text-white mt-8 ml-7 py-1 px-6 hover:bg-red-600 cursor-pointer duration-300"
      >
        Reset Cart
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300 cursor-pointer">
          <span>
            <ArrowLeftRounded />
          </span>
          go shopping
        </button>
      </Link>
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

export default CartItem;
