import { createSlice } from "@reduxjs/toolkit";

import { upadateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //state is current state of the cart and action is data in the payload
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id); //to check if the item exists in the cart or not

      //if item exist then we will add that item to existing items
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id == existItem._id ? item : x
        );
      }

      //if item doesnt exist then we will add that item to cart
      else {
        state.cartItems = [...state.cartItems, item];
      }

      return upadateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      return upadateCart(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
