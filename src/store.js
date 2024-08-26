import { configureStore } from "@reduxjs/toolkit";
import productDetailsReducer from "./features/Product-list/productDetailSlice"
import favoriteProductReducer from "./features/Favorites/favoriteSlice"

const store = configureStore({
    reducer: {
        productDetails: productDetailsReducer,
        favoriteProducts : favoriteProductReducer
    }
})

export default store