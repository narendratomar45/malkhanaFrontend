import { createSlice } from "@reduxjs/toolkit";

const mvActSlice = createSlice({
  name: "mvAct",
  initialState: null,
  reducers: {
    addMvAct: (state, action) => {
      return action.payload;
    },
  },
});
export const { addMvAct } = mvActSlice.actions;
export default mvActSlice.reducer;
