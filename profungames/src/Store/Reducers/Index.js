import { combineReducers } from "redux";
import AuthReducer from "./AuthReducers";
import MobReducer from "./MobAuthReducers";

export default combineReducers({
    auth: AuthReducer,
    mob: MobReducer
})