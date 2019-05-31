import { createAction } from "redux-actions";
import axios from "axios";
import { BACKEND_URL } from "../../config.js";

const NEW_CUSTOMER = createAction("NEW_CUSTOMER");

export const newcustomer = values => dispatch => {
    return axios.get(
        BACKEND_URL + "/api/customer", {
            Customer: values.Customer,
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwcml5YUBvbmV3ZWFsdGguaW4iLCJSb2xlIjoiIiwiYXV0aF90aW1lIjoiMTA6NDYiLCJqdGkiOiJiOTliMDc0MS1mM2MzLTQ0NWQtYWU0NS01YmIxMmNlNjY5NjciLCJleHAiOjE1NjAzMTY1NjIsIm5iZiI6IjE1NTkwMjA1NjIiLCJWZW51ZSI6IjEiLCJJc0FkbWluIjoiTiIsImlzcyI6IlBsYXlvLmNvbSIsImF1ZCI6IlBsYXlvLmNvbSJ9.mT4L8xjYS0CFForN4WVktHfQtDXdDImYYBKdEyYolR4"
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

