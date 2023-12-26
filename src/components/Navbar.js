import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="max-w-screen bg-slate-900 text-white h-20  mx-auto flex-wrap">
      <div className="flex flex-row justify-evenly items-center">
        <div className="">
          <NavLink to="/">
            <div className="ml-10 mt-3">
              <img src={logo} loading="lazy" width={150} />
            </div>
          </NavLink>
        </div>
        <div className=" flex justify-center items-center gap-x-5 font-medium text-lg text-slate-100">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="w-full">
              {cart.length > 0 ? (
                <div className="relative">
                  <span
                    className=" absolute -top-3 left-2 text-sm rounded-full w-5 h-5 animate-bounce bg-green-500
                  "
                  >
                    {cart.length}
                  </span>
                  <FaCartShopping className="" />
                </div>
              ) : (
                <NavLink to="/cart">
                  <FaCartShopping className="" />
                </NavLink>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
