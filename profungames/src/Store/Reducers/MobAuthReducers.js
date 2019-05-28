import { handleActions } from "redux-actions";

const INITIAL_STATE = {
    zxc: "",
    userfound: false
};
const MobAuthReducer = handleActions(
    {
        SEARCH_MOBILE: (state, action) => {
            return { ...state, userfound: true, ...action.payload };
        }
    },
    INITIAL_STATE
);

export default MobAuthReducer;
