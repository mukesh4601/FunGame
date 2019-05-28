import React, { Component } from "react";
import TopBar from "../rightsection/topbar/topbar";
import Tables from "../rightsection/tables/tables";
import "./rightsection.css";
class RightSection extends Component {
  state = {};
  render() {
    return (
      <div>
        <TopBar />
        <Tables />
      </div>
    );
  }
}

export default RightSection;
