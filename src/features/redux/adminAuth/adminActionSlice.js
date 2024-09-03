import adminServices from "./adminActionService";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const adminActionSlice = createSlice({
  name: "adminAuth",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    dashboard: [],
    products: [],
    categories: [],
    banners: [],
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allUsers.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(allUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.users = action.payload;
      })
      .addCase(allUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.users = [];
      })
      .addCase(addNewProduct.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.products = [action.payload, ...state.products];
      })
      .addCase(addNewProduct.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(allProducts.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(allProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.products = action.payload
      })
      .addCase(allProducts.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
  },
});

export const allUsers = createAsyncThunk("FETCH/ALLUSERS", async () => {
  try {
    return await adminServices.getAllUsers();
  } catch (error) {
    console.log(error);
  }
});

export const allProducts = createAsyncThunk(
  "GET/ALLPRODUCTS",
  async () => {
    try {
      return await adminServices.getAllProducts();
    } catch (error) {
      console.log(error);
    }
  }
);

export const addNewProduct = createAsyncThunk(
  "POST/PRODUCTS",
  async (formData) => {
    try {
      return await adminServices.addProducts(formData);
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeProduct = createAsyncThunk(
  "DELETE/PRODUCTS",
  async (id) => {
    try {
      return await adminServices.deleteProducts(id);
    } catch (error) {
      console.log(error);
    }
  }
);

export default adminActionSlice.reducer;
