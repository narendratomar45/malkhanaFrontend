import { createSlice } from "@reduxjs/toolkit";

const exciseSlice = createSlice({
  name: "excise",
  initialState: null,
  reducers: {
    addExcise: (state, action) => {
      return action.payload;
    },
  },
});

export const { addExcise } = exciseSlice.actions;
export default exciseSlice.reducer;
