import React from "react";
import "./App.css";
import Login from "./login/login";
import MobSearch from "./mobsearch/mobsearch";
import NewEntry from "./newcustomer/newcustomer";
import ExistingCus from "./existingcustomer/existingcustomer";
// import Events from "./events/events";
// import Packages from "./packages/packages";
// import Coupons from "./coupon/coupon";
import EventSelection from "./eventselection/eventselection";
import Summary from "./summery/summary";
function App() {
  return (
    <div className="container-fluid">
      <Summary />
    </div>
  );
}

export default App;
