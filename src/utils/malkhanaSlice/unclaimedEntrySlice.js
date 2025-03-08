import { createSlice } from "@reduxjs/toolkit";

const unclaimedEntrySlice = createSlice({
  name: "unclaimedEntry",
  initialState: null,
  reducers: {
    addUnclaimedEntry: (state, action) => {
      return action.payload;
    },
  },
});
export const { addUnclaimedEntry } = unclaimedEntrySlice.actions;
export default unclaimedEntrySlice.reducer;
