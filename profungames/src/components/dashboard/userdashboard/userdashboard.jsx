import React, { Component } from "react";
import MenuBar from "../../menu/menu";
import Active from "../userdashboard/active/active";
import "./userdashboard.css";
class UserDashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <MenuBar />
          <div class="row cards">
            <div class="col-sm-4">
              <Active />
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDashboard;
