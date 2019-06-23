import { combineReducers } from "redux";
import data from "./getDataReducer";
import dataFild from "./addFildReducer";
import drawArr from "./createObjDrawReducer";
import filterFilds from "./filterInputsFildsReducer";

const rootReducer = combineReducers({
  data,
  dataFild,
  drawArr,
  filterFilds
});

export default rootReducer;
