import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import malkhanaReducer from "./malkhanaSlice/malkhanaEntrySlice.js";
import fslReducer from "./malkhanaSlice/fslSlice.js";
import kurkiReducer from "./malkhanaSlice/kurkiSlice.js";
import othersEntryReducer from "./malkhanaSlice/othersEntrySlice.js";
import unclaimedEntryReducer from "./malkhanaSlice/unclaimedEntrySlice.js";
import artoReducer from "./seizedSlice/artoSlice.js";
import exciseReducer from "./seizedSlice/exciseSlice.js";
import ipcReducer from "./seizedSlice/ipcSlice.js";
import mvActReducer from "./seizedSlice/mvActSlice.js";
import seizureSliceReducer from "./seizedSlice/seizureSlice.js";
import unclaimedVehicleReducer from "./seizedSlice/unclaimedVehicleSlice.js";
import importDataReducer from "./importDataSlice.js";
import summonEntryReducer from "./summonEntrySlice.js";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    malkhanaEntry: malkhanaReducer,
    fslEntry: fslReducer,
    kurki: kurkiReducer,
    othersEntry: othersEntryReducer,
    unclaimedEntry: unclaimedEntryReducer,
    arto: artoReducer,
    excise: exciseReducer,
    ipc: ipcReducer,
    mvAct: mvActReducer,
    seizureVehicle: seizureSliceReducer,
    unclaimedVehicle: unclaimedVehicleReducer,
    importData: importDataReducer,
    summonEntry: summonEntryReducer,
  },
});
export default appStore;
