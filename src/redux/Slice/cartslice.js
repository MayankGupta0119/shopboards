import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
  name: "cart",
  //if you want to store multiple values in initialState, then use a object to store it
  // initialState: {
  //   items: [],     // an array to store individual items in the cart
  //   totalAmount: 0, // a total amount to track the overall cost of items in the cart
  //   // other properties as needed...
  // },
  initialState: [],
  reducers: {
    //reducer function always take two input parameter --> state and action
    //now we had send post in add() parameter in Product.js now to acces those we have
    //to use payload to push that value in state using action.payload(represents that parameter which is sent)
    add: (state, action) => {
      state.push(action.payload);
    },
    //state is refering to the array of this slice,
    //ess slice ka state is an array
    //agr multiple values hota to state me ek object daalte or us object ke ander muliple values store krte.
    //then can access like state.array_name.push(.......)
    //then state will represent that object
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartslice.actions;
export default cartslice.reducer;
