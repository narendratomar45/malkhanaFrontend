import { createSlice } from "@reduxjs/toolkit";

const othersEntrySlice = createSlice({
  name: "othersEntry",
  initialState: null,
  reducers: {
    addOthersEntry: (state, action) => {
      return action.payload;
    },
  },
});
export const { addOthersEntry } = othersEntrySlice.actions;
export default othersEntrySlice.reducer;
