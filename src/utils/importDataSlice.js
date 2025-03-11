import { createSlice } from "@reduxjs/toolkit";

const importDataSlice = createSlice({
  name: "importData",
  initialState: null,
  reducers: {
    addImportData: (state, action) => {
      return action.payload;
    },
  },
});
export const { addImportData } = importDataSlice.actions;
export default importDataSlice.reducer;
