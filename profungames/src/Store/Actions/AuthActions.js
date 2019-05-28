import { createAction } from "redux-actions";
import axios from "axios";
import { BACKEND_URL } from "../../config.js";

const VERIFY_USER = createAction("VERIFY_USER");

export const verifyUser = values => dispatch => {
    console.log(values);
    return axios.post(
        BACKEND_URL + 'api/token', {
            username: values.username,
            password: values.password,
            RequestedAt: values.RequestedAt,
            // headers: {
            //     'Access-Control-Allow-Origin': '*'
            // },
            // crossdomain: true
        }
    ).then((res) => {
        localStorage.setItem("token", res.response.data.token);
        dispatch(VERIFY_USER());

    }).catch(error => {
        document.getElementById("emailerror").innerHTML = error.response.data.errorMessage;
        return Promise.reject();
    });
}







