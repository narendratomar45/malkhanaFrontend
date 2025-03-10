import { createSlice } from "@reduxjs/toolkit";

const unclaimedVehicleSlice = createSlice({
  name: "uncalaimedVehicle",
  initialState: null,
  reducers: {
    addUnclaimVehicle: (state, action) => {
      return action.payload;
    },
  },
});
export const { addUnclaimVehicle } = unclaimedVehicleSlice.actions;
export default unclaimedVehicleSlice.reducer;
