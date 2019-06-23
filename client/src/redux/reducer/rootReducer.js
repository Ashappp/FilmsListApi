import { combineReducers } from "redux";
import data from "./getDataReducer";
import dataFild from "./addFildReducer";

const rootReducer = combineReducers({
  data,
  dataFild
});

export default rootReducer;
