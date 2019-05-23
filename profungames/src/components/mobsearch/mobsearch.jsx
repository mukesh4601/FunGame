import React, { Component } from "react";
import Headings from "../headings/headings";
import MenuBar from "../menu/menu";
import "./mobsearch.css";
class MobSearch extends Component {
  state = {};

  render() {
    return (
      <div className="row">
        <div className="col-md-12 panel">
          <MenuBar />
          <div className="row">
            <div className="col-md-6 left" />
            <div className="col-md-6 right rightmob">
              <Headings />
              <div className="row">
                <div className="col-md-12">
                  <form>
                    <div className="form-group formdes">
                      <label>mobile number</label>
                      <input
                        type="text"
                        placeholder="enter mobile number"
                        className="form-control"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 buttons">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item col-md-4">
                        <a className="page-link" href="#" tabindex="-1">
                          search
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobSearch;
