
import { createAction } from "redux-actions";
import axios from "axios";
import { BACKEND_URL } from "../../config.js";


const ALL_PRODUCTS = createAction("ALL_PRODUCTS");
const COUPON_CHECK = createAction("COUPON_CHECK");
export const allproducts = values => dispatch => {
    return axios.get(
        BACKEND_URL + "tableapi/products",
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
    ).then(res => {
        dispatch(ALL_PRODUCTS(res.data));
        console.log(res.data);
    })
        .catch(error => {
            // document.getElementById("childerror") = error.response;
            console.log(error.response);
            console.log(values);
            return Promise.reject();
        });
};



export const couponcheck = values => dispatch => {
    console.log(values);
    return axios.get(
        BACKEND_URL + "tableapi/CouponCodes", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        },
    ).then(res => {
        dispatch(COUPON_CHECK(res.data));
        console.log(res.data);
    })
        .catch(error => {
            // document.getElementById("childerror") = error.response;
            console.log(error.response);
            console.log(values);
            return Promise.reject();
        });
};



