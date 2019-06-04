import { createAction } from "redux-actions";
import axios from "axios";
import { BACKEND_URL } from "../../config.js";

const NEW_CUSTOMER = createAction("NEW_CUSTOMER");
export const newcustomer = values => dispatch => {
    return axios.post(
        BACKEND_URL + "api/customer", {
            Customer: values.Customer,
        },
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
    ).then(res => {
        localStorage.setItem("mobilenumber", res.data.item.mobileNbr);
        dispatch(NEW_CUSTOMER(res.data.item));
        console.log(res.data.item);
    })
        .catch(error => {
            // document.getElementById("childerror") = error.response;
            console.log(error.response);
            console.log(values);
            return Promise.reject();
        });
};













