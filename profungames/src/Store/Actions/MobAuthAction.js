import { createAction } from "redux-actions";
import axios from "axios";
import { BACKEND_URL } from "../../config.js";

const SEARCH_MOBILE = createAction("SEARCH_MOBILE");

export const searchmobile = values => dispatch => {
  console.log(values);
  //   return axios.get(
  //     BACKEND_URL + "api/customer?SearchCriteria=0&SearchTerm=" + values.mobileno,
  //     {
  //       // password: values.password,
  //       // RequestedAt: values.RequestedAt
  //       //       headers: {
  //       //         "Access-Control-Allow-Origin": "*"
  //       //       },
  //       //       crossdomain: true
  //     }
  //   );

  //   .then(res => {
  //     console.log("error");
  //     localStorage.setItem("token", res.response.data.token);
  //     dispatch(SEARCH_MOBILE(res.response));

  //   })
  //   .catch(error => {
  //     // document.getElementById("emailerror").innerHTML =
  //     //   error.response.errorMessage;
  //     // consol
  // e.log(error.response.errorMessage);

  //     return Promise.reject();
  //   });
};
