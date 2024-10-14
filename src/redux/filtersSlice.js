import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: "",
  reducers: {
    changeFilter: (state, { payload }) => {
      return payload;
    },
  },
});

export const {} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
