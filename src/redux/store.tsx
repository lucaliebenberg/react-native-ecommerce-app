import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./features/cart/cartSlice"

const store = configureStore({
  reducer: {
    // cart: cartReducer,s
  },
});

export default store;
