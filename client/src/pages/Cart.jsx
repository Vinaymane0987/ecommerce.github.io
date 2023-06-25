import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state) => state.vinsClub.productData);
  const userInfo = useSelector((state) => state.vinsClub.userInfo);
  const [totalPrice, setTotalPrice] = useState("");
  const [buyNow, setByNow] = useState(false);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.quantity * item.price;
      return price; 
    });
    console.log(price);
    setTotalPrice(price);
  }, [productData]);

  const handleByNow = () => {
    if (userInfo) {
      setByNow(true);
    } else {
      toast.error("you need to sign in first");
    }
  };

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalPrice * 100,
      token: token,
    });
  };

  return (
    <div>
      {totalPrice ? (
        <div className=" max-w-screen-xl mx-auto py-20 flex">
          <CartItem />
          <div className="w-1/3 py-6 px-4 bg-[#fafafa]">
            <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className=" text-2xl font-medium">Cart totals</h2>
              <p className="flex items-center gap-4 text-base">
                subtotal{" "}
                <span className=" font-titleFont font-bold text-lg">
                  ${totalPrice}
                </span>
              </p>
              <p className="flex items-start gap-4 text-base">
                shipping{" "}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  beatae enim fugit.
                </span>
              </p>
            </div>
            <p className=" font-titleFont font-semibold flex justify-between mt-6">
              total <span className=" text-xl font-bold">${totalPrice}</span>
            </p>
            <button
              onClick={handleByNow}
              className=" text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300 cursor-pointer"
            >
              Buy now
            </button>
            {buyNow && (
              <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  token={payment}
                  stripeKey="pk_test_51NLRCjSExc1MU51Y9T98AX8pipzVyt1Fas2D8kshKDk7l7JJUzJ2HClSnb3m8jRZVFrA0OVRM4EVsbjxKXGwILTT00W2IMQjmo"
                  name="vinsClub online shopping"
                  amount={totalPrice * 100}
                  label="pay to vinsclub"
                  description={`your payment amount is ${totalPrice}`}
                  email={userInfo.email}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <p className="flex items-center justify-center mx-auto w-full h-52">
          Zero product available in the cart
        </p>
      )}
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

export default Cart;
