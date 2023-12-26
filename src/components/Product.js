import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { add, remove } from "../redux/Slice/cartslice";
const Product = ({ post }) => {
  //here have to use same name as of the slice to store array in a variable named cart
  //cart slice ka state is an array where the items stored in addtocart is there.
  //therefore if we have to use that array here, first we have to take it from redux store using useSelector hook in
  //the same name variable as that of slice
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed");
  };
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added");
  };
  return (
    <div className="flex mt-10 flex-col boxshadow p-2 mr-1 ml-4 gap-4 w-[22%] justify-around items-center">
      <div className="text-center font-semibold text-lg">
        <p>{post.title.split(" ").slice(0, 3).join(" ") + "..."}</p>
      </div>
      <div>
        <p>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div className="max-h-[15rem] max-w-[12rem]">
        <img src={post.image} loading="lazy" className="h-full w-full" />
      </div>
      <div className="flex justify-between items-center gap-3">
        <div className="font-bold text-lg text-green-500">
          <p>{"$" + post.price}</p>
        </div>
        {/* here if the prop of which product is passed to Product component
      if its id is already there in cart array then it means its already there, therfore
      show  */}
        {cart.some((p) => p.id === post.id) ? (
          <button
            className="button2 font-semibold text-lg"
            onClick={removeFromCart}
          >
            <span className="button2__text">Delete</span>
            <span className="button2__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </span>
          </button>
        ) : (
          <button
            className="button font-semibold text-lg"
            onClick={addToCart}
            type="button"
          >
            <span className="button__text">Add Item</span>
            <span className="button__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
