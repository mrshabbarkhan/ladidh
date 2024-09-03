import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOtp } from "./authService";

const authSLice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    user: null,
    serverOTP: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOtp.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(fetchOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.serverOTP = action.payload;
      })
      .addCase(fetchOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.serverOTP = null;
      });
  },
});

export const fetchOtp = createAsyncThunk(
  "FETCH/OTP",
  async (email, thunkAPI) => {
    try {
      return await getOtp(email);
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export default authSLice.reducer