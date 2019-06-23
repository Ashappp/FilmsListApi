import { combineReducers } from "redux";
import data from "./getDataReducer";
import dataFild from "./addFildReducer";
import drawObj from "./createObjDrawReducer";
import filterFilds from "./filterInputsFildsReducer";

const rootReducer = combineReducers({
  data,
  dataFild,
  drawObj,
  filterFilds
});

export default rootReducer;
