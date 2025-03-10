import { createSlice } from "@reduxjs/toolkit";

const artoSlice = createSlice({
  name: "arto",
  initialState: null,
  reducers: {
    addArto: (state, action) => {
      return action.payload;
    },
  },
});
export const { addArto } = artoSlice.actions;
export default artoSlice.reducer;
