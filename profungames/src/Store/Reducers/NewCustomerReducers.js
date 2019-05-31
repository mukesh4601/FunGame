import { handleActions } from "redux-actions";

const INITIAL_STATE = {
    zxc: "",
    userfound: false
};
const NewCustomer = handleActions(
    {
        NEW_CUSTOMER: (state, action) => {
            return { ...state, userfound: true, ...action.payload };
        }
    },
    INITIAL_STATE
);

export default NewCustomer;
