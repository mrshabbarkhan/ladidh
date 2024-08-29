import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: null,
  },
  reducers: {
    addToCart(state, action) {
      const quantity = action.payload.quantity || 1;
      const withQty = { ...action.payload, quantity };
      state.cartItems = [withQty, ...state.cartItems];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
