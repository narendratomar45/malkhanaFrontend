import { createSlice } from "@reduxjs/toolkit";

const fslSlice = createSlice({
  name: "fslEntry",
  initialState: null,
  reducers: {
    addFsl: (state, action) => {
      //   console.log("ok", action.payload);

      return action.payload;
    },
  },
});
export const { addFsl } = fslSlice.actions;
export default fslSlice.reducer;
