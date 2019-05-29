import { createAction } from "redux-actions";
import axios from "axios";
import { BACKEND_URL } from "../../config.js";

const VERIFY_USER = createAction("VERIFY_USER");

export const verifyUser = values => dispatch => {
    return axios.post(
        BACKEND_URL + 'api/token', {
            username: values.username,
            password: values.password,
            RequestedAt: values.RequestedAt,
        }
    ).then((res) => {
        localStorage.setItem("token", "Bearer " + res.response.token);
        dispatch(VERIFY_USER());

    }).catch(error => {
        document.getElementById("emailerror").innerHTML = error.response.data.errorMessage;
        return Promise.reject();
    });
}







