import { createAction } from "redux-actions";
import axios from "axios";
import { BACKEND_URL } from "../../config.js";

const SEARCH_MOBILE = createAction("SEARCH_MOBILE");

export const searchmobile = values => dispatch => {
    return axios.get(
        BACKEND_URL + "api/customer?SearchCriteria=0&SearchTerm=" + values.mobileno, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
    ).then(res => {
        dispatch(SEARCH_MOBILE(res.response.data.customer));
        console.log(res.response.data.customer)

    }).catch(err => {
        // document.getElementById("mobileerror").innerHTML =
        //     err.response.data.errorMessage;
        return Promise.reject();
    }).finally(res => {
        // dispatch(SEARCH_MOBILE(res.response.data.customer));
    });
};

