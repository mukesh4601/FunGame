import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/login/login";
import MobSearch from "./components/mobsearch/mobsearch";
import NewEntry from "./components/newcustomer/newcustomer";
import ExistingCus from "./components/existingcustomer/existingcustomer";
// import Events from "./events/events";
// import Packages from "./packages/packages";
import Coupons from "./components/coupons/coupon";
import EventSelection from "./components/eventselection/eventselection";
import Summary from "./components/summary/summary";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/mobsearch" component={MobSearch} />
      <Route path="/newentry" component={NewEntry} />
      <Route path="/existingcus" component={ExistingCus} />
      <Route path="/eventselection" component={EventSelection} />
      <Route path="/summary" component={Summary} />
      <Route path="/coupon" component={Coupons} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
