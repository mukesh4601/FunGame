import React, { Component } from "react";
import "./sidebar.css";
class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="row  left-spacing">
        <div className="col-md-12">
          <h3 className="logo">FunGames</h3>
        </div>

        <div className="col-md-12">
          <ul className="list-group">
            <li>
              <a
                href="#"
                className="list-group-item list-group-item-action list-group-item-light"
              >
                <i class="fa fa-tachometer fafa-space" aria-hidden="true" />{" "}
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/venue"
                className="list-group-item list-group-item-action list-group-item-light"
              >
                <i class="fa fa-yelp fafa-space" aria-hidden="true" /> venue
              </a>
            </li>
            <li>
              <a
                href="#"
                className="list-group-item list-group-item-action list-group-item-light"
              >
                <i class="fa fa-tasks fafa-space" aria-hidden="true" /> My Tasks
              </a>
            </li>
            <li>
              <a
                href="#"
                className="list-group-item list-group-item-action list-group-item-light"
              >
                <i class="fa fa-briefcase fafa-space" aria-hidden="true" />{" "}
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="list-group-item list-group-item-action list-group-item-light"
              >
                <i class="fa fa-address-book-o fafa-space" aria-hidden="true" />{" "}
                Clients
              </a>
            </li>
            <li>
              <a
                href="#"
                className="list-group-item list-group-item-action list-group-item-light"
              >
                <i class="fa fa-files-o fafa-space" aria-hidden="true" />{" "}
                Invoice
              </a>
            </li>
            <li>
              <a
                href="#"
                className="list-group-item list-group-item-action list-group-item-light"
              >
                <i class="fa fa-address-card-o fafa-space" aria-hidden="true" />{" "}
                Reports
              </a>
            </li>
            <li>
              <a
                href="#"
                className="list-group-item list-group-item-action list-group-item-light"
              >
                <i class="fa fa-cog fafa-space" aria-hidden="true" /> Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
