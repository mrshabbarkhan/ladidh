import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  debouncedTerm: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setDebouncedTerm: (state, action) => {
      state.debouncedTerm = action.payload;
    },
  },
});

export const { setSearchTerm, setDebouncedTerm } = searchSlice.actions;
export default searchSlice.reducer;
