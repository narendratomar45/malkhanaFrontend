import { createSlice } from "@reduxjs/toolkit";

const seizureSlice = createSlice({
  name: "seizureVehicle",
  initialState: null,
  reducers: {
    addSeizure: (state, action) => {
      return action.payload;
    },
  },
});
export const { addSeizure } = seizureSlice.actions;
export default seizureSlice.reducer;
