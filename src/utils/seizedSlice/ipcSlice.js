import { createSlice } from "@reduxjs/toolkit";

const ipcSlice = createSlice({
  name: "ipc",
  initialState: null,
  reducers: {
    addIpc: (state, action) => {
      return action.payload;
    },
  },
});

export const { addIpc } = ipcSlice.actions;
export default ipcSlice.reducer;
