import { createAction } from "redux-actions";
import axios from "axios";
import { BACKEND_URL } from "../../config.js";

const DASHBOARD_STATUS = createAction("DASHBOARD_STATUS");
const ACTIVITY = createAction("ACTIVITY");

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

export const activity = values => dispatch => {
    console.log(values);
    return axios.post(
        BACKEND_URL + "api/activity", {
            CustomerID: values.CustomerID,
            ActualMoneyCollected: values.ActualMoneyCollected,
            TotalPackageCost: values.TotalPackageCost,
            PaymentReference: values.PaymentReference,
            Childs: values.Childs
        },
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
    ).then(res => {
        dispatch(ACTIVITY(res.data.item));
        console.log(res.data.item);
    })
        .catch(error => {
            return Promise.reject();
        });
};








