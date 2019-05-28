import { combineReducers } from "redux";
import MobAuthReducer from "./AuthReducers";

export default combineReducers({
  auth: MobAuthReducer
});
