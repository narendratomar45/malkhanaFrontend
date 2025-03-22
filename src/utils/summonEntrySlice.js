import { createSlice } from "@reduxjs/toolkit";

const summonEntrySlice = createSlice({
  name: "summonEntry",
  initialState: null,
  reducers: {
    addSummonEntry: (state, action) => {
      return action.payload;
    },
  },
});
export const { addSummonEntry } = summonEntrySlice.actions;
export default summonEntrySlice.reducer;
