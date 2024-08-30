import { configureStore } from "@reduxjs/toolkit";
import productDetailsReducer from "./features/Product-list/productDetailSlice"
import favoriteProductReducer from "./features/Favorites/favoriteSlice"
import cartReducer from './features/Cart/cardSlice'
import searchReducer from "./features/admin/page/searchSlice";

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
    favoriteProducts: favoriteProductReducer,
    cart: cartReducer,
    search: searchReducer,
  },
});

export default store