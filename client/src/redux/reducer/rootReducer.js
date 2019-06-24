import {
  combineReducers
} from "redux";
import data from "./getDataReducer";
import filteredData from "./filteredDataReducer";

const rootReducer = combineReducers({
  data,
  filteredData,
});

export default rootReducer;