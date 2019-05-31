import { handleActions } from "redux-actions";

const INITIAL_STATE = {
    zone: [],
    Items: false
};
const DashboardReducer = handleActions(
    {
        DASHBOARD_STATUS: (state, action) => {
            return { ...state, Items: true, zone: action.payload };
        }
    }, INITIAL_STATE);

export default DashboardReducer;
