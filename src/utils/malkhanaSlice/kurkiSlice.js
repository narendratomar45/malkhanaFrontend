import { createSlice } from "@reduxjs/toolkit";

const kurkiSlice = createSlice({
  name: "kurki",
  initialState: null,
  reducers: {
    addKurki: (state, action) => {
      return action.payload;
    },
  },
});
export const { addKurki } = kurkiSlice.actions;
export default kurkiSlice.reducer;
