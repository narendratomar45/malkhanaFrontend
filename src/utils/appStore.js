import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import malkhanaReducer from "./malkhanaSlice/malkhanaEntrySlice.js";
import fslReducer from "./malkhanaSlice/fslSlice.js";
import kurkiReducer from "./malkhanaSlice/kurkiSlice.js";
import othersEntryReducer from "./malkhanaSlice/othersEntrySlice.js";
import unclaimedEntryReducer from "./malkhanaSlice/unclaimedEntrySlice.js";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    malkhanaEntry: malkhanaReducer,
    fslEntry: fslReducer,
    kurki: kurkiReducer,
    othersEntry: othersEntryReducer,
    unclaimedEntry: unclaimedEntryReducer,
  },
});
export default appStore;
