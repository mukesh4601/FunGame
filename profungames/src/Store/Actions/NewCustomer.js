import { createAction } from "redux-actions";
import axios from "axios";
import { BACKEND_URL } from "../../config.js";


const NEW_CUSTOMER = createAction("NEW_CUSTOMER");

export const searchmobile = values => dispatch => {
    return axios.get(
        BACKEND_URL + "/api/customer", {
            firstName: values.firstName,
            lastName: values.lastName,
            mobileNbr: values.mobileNbr,
            emailAddress: values.emailAddress,
            childs: values.childs,
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
    ).then(res => {
        dispatch(NEW_CUSTOMER(res.data));
    })
};

