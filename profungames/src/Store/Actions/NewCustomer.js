import { createAction } from "redux-actions";
import axios from "axios";
import { BACKEND_URL } from "../../config.js";

const NEW_CUSTOMER = createAction("NEW_CUSTOMER");

export const newcustomer = values => dispatch => {
    return axios.get(
        BACKEND_URL + "/api/customer", {
            Customer: values.Customer,
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
    ).then(res => {
        dispatch(NEW_CUSTOMER(res));
        console.log("aagya yaha tu");
    })
        .catch(error => {
            console.log(error);
            console.log(values);
            return Promise.reject();
        });
};

