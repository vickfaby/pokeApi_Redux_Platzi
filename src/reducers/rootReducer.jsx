import { combineReducers } from "redux"; // I MPORTANTE ALÑ COMBINAR REDUCER Y A LA VEZ USAR IMMUTABLE
import { dataSlice } from "../slices/dataSlices";
import { uiSlice } from "../slices/uiSlices";

const rootReducer = combineReducers({
  data: dataSlice.reducer,
  ui: uiSlice.reducer,
});

export default rootReducer;
