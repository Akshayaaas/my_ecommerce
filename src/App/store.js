import { configureStore } from "@reduxjs/toolkit";
import cartSlice ,{cartMiddleware } from "./Features/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});
