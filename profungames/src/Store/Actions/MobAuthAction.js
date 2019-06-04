import { createAction } from "redux-actions";
import axios from "axios";
import { BACKEND_URL } from "../../config.js";
import { createBrowserHistory } from 'history';

export default createBrowserHistory();


const SEARCH_MOBILE = createAction("SEARCH_MOBILE");
const SEARCHE_MOBILE = createAction("SEARCHE_MOBILE");

export const searchmobile = values => dispatch => {
    return axios.get(
        BACKEND_URL + "api/customer?SearchCriteria=0&SearchTerm=" + values.mobileno, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
    ).then(res => {

        if (res.data.didError === false) {
            localStorage.setItem("mobilenumber", values.mobileno);
            window.location.href = '/existingcus';
            dispatch(SEARCH_MOBILE(res.data));
            console.log(res.data);
        }

        else {
            window.location.href = '/newentry?mobilenumber=' + values.mobileno;
            dispatch(SEARCH_MOBILE(res.data));
        }
        console.log(res.data.didError);
    })
};



export const searchemobile = values => dispatch => {
    return axios.get(
        BACKEND_URL + "api/customer?SearchCriteria=0&SearchTerm=" + localStorage.getItem("mobilenumber"), {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
    ).then(res => {
        dispatch(SEARCHE_MOBILE(res.data));
        console.log(res.data);
        console.log(res.data.didError);
    })
};

