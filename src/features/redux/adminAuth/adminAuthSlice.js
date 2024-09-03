import adminServices from "./adminAuthService";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    dashboard: [],
    Products: [],
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
      .addCase(addNewProduct.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

export const allUsers = createAsyncThunk("FETCH/ALLUSERS", async () => {
  try {
    return await adminServices.getAllUsers();
  } catch (error) {
    console.log(error);
  }
});

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

export default adminAuthSlice.reducer;
