import React, { Component } from "react";

import "./topbar.css";

class TopBar extends Component {
  state = {};
  render() {
    return (
      <div className="row rightdash">
        {/* <div className="col-md-12">
                  <input
                    type="search"
                    className="search-bar"
                    placeholder="Search..."
                  />
                  <i class="fa fa-search search-icon" aria-hidden="true" />
                </div> */}
        <div className="col-md-12 statistics">
          <span className="">Quick Statistics</span>
        </div>
        <div className="col-md-12  financial-report">
          <div className="row">
            <div className="col-sm-4 card1">
              <div className="row">
                <div className="col-sm-9">
                  <p className="para">Open payments</p>
                  <span className="money">
                    <b>$4500.00</b>
                  </span>
                </div>
                <div className="right-icon col-sm-3">
                  <span className="right-icon-pro">
                    <i class="fa fa-usd" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-sm-4 card1">
              <div className="row">
                <div className="col-sm-9">
                  <p className="para">Open invoices</p>
                  <span className="money">
                    <b>23 Nos</b>
                  </span>
                </div>
                <div className="right-icon col-sm-3">
                  <span className="right-icon-pro ">
                    <i class="fa fa-bars" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-sm-4 card1">
              <div className="row">
                <div className="col-sm-9">
                  <p className="para">Monthly renevue</p>
                  <span className="money">
                    <b>$1300.00</b>
                  </span>
                </div>
                <div className="right-icon col-sm-3">
                  <span className="right-icon-pro">
                    <i class="fa fa-bar-chart" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
