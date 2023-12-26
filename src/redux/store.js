import { configureStore } from "@reduxjs/toolkit";
import { cartslice }  from "./Slice/cartslice";

export const store = configureStore({
  reducer: {
    cart: cartslice.reducer,
  },
});
