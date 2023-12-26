import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  //below here we are taking the initialized array in CartSlice obj of slice named "cart"
  //and storing that array in cartdata variable, useselector me jo state hai usko he return kr rhai means we are
  //taking that array which is their in initialState of cart slice.
  //also use same name as of the array in the slice
  const { cart } = useSelector((state) => state);
  //Calulating sum amount of cart using useEffect, whenever there is change in the cart calling useEffect
  useEffect(() => {
    let sum = 0;
    cart.forEach((element) => {
      sum += element.price;
    });
    setTotalAmount(sum);
  }, [cart]);
  return (
    <div className="max-w-6xl mx-auto flex flex-wrap">
      {cart.length > 0 ? (
        // if true create a single parent div and then inside it can create multiple divs.
        <div className="flex justify-between items-center">
          <div className="flex flex-col w-[55%]">
            {cart.map((post, index) => (
              <CartItem key={post.id} post={post} index={index} />
            ))}
          </div>
          <div className="zoomInUp w-[43%] h-[5rem] ml-[3rem] fixed top-24 right-0">
            <div className="flex flex-col gap-y-[10rem] items-start justify-between w-full h-full">
              <div className="flex flex-col justify-between items-start">
                <div className="font-semibold text-3xl text-green-800">
                  Your Cart
                </div>
                <div className="font-bold text-6xl text-green-600">Summary</div>
                <p>
                  <span className="font-semibold text-2xl text-green-800 ">
                    Total Items : {cart.length}
                  </span>
                </p>
              </div>
              <div className="">
                <p>
                  <span className="font-semibold text-xl">Total Amount : </span>
                  {/* toLocalString is used to format decimals */}
                  <span className="font-bold text-xl num">
                    $ {totalAmount.toLocaleString()}
                  </span>{" "}
                </p>
                <button className="checkoutbtn mt-3">Checkout Now</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-screen h-screen gap-5">
          <h1 className="text-xl font-semibold">Cart Empty</h1>
          <NavLink to="/">
            <button className="checkoutbtn text-xl font-semibold ">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
