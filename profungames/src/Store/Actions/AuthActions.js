import { createAction } from "redux-actions";
import axios from "axios";
import { BACKEND_URL } from "../../config.js";

const VERIFY_USER = createAction("VERIFY_USER");

export const verifyUser = values => dispatch => {
  console.log(values);
  return axios.post(BACKEND_URL + "api/token", {
    username: values.username,
    password: values.password,
    RequestedAt: values.RequestedAt
    // headers: {
    //   "Access-Control-Allow-Origin": "*"
    // },
    // crossdomain: true
  });
  // .then(res => {
  //   console.log("error");
  //   localStorage.setItem("token", res.response.data.token);
  //   dispatch(VERIFY_USER(res.response));
  // })
  // .catch(error => {
  //   // document.getElementById("emailerror").innerHTML =
  //   //   error.response.errorMessage;
  //   // console.log(error.response.errorMessage);

  //   return Promise.reject();
  // });
};
