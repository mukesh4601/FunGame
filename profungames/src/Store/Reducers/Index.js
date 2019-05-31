import { combineReducers } from "redux";
import AuthReducer from "./AuthReducers";
import MobReducer from "./MobAuthReducers";
import ZoneReducers from "./ZoneReducers";

export default combineReducers({
    auth: AuthReducer,
    mob: MobReducer,
    zone: ZoneReducers
})