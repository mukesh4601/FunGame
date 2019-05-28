import React, { Component } from "react";
import SideBar from "./sidebar/sidebar";
import RightSection from "./rightsection/rightsection";
import "./dashboard.css";
class AdminDashboard extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <SideBar />
            </div>
            <div className="col-md-9 rightsection">
              <RightSection />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
