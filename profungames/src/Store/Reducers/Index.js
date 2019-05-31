import { combineReducers } from "redux";
import AuthReducer from "./AuthReducers";
import MobReducer from "./MobAuthReducers";
import ZoneReducers from "./ZoneReducers";
import NewCustomer from "./NewCustomerReducers";

export default combineReducers({
    auth: AuthReducer,
    mob: MobReducer,
    zone: ZoneReducers,
    newuser: NewCustomer
})