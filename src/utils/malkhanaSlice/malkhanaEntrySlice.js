import { createSlice } from "@reduxjs/toolkit";

const malkhanaEntrySlice = createSlice({
  name: "malkhanaEntry",
  initialState: null,
  reducers: {
    addMalkhanaEntry: (state, action) => {
      return action.payload;
    },
  },
});

export const { addMalkhanaEntry } = malkhanaEntrySlice.actions;
export default malkhanaEntrySlice.reducer;
