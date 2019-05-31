import { createAction } from "redux-actions";
import axios from "axios";
import { BACKEND_URL } from "../../config.js";

const DASHBOARD_STATUS = createAction("DASHBOARD_STATUS");

export const dashboardata = values => dispatch => {
    return axios.get(
        BACKEND_URL + "api/Activity", {
            headers: {
                Authorization: localStorage.getItem("token")
            },
            crossdomain: true
        }
    ).then(res => {
        dispatch(DASHBOARD_STATUS(res.data.items));
    })
        .catch(err => {
            console.log(err.response.data.errorMessage);
            return Promise.reject();
        })
};







