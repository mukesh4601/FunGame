import React, { Component } from "react";
import Headings from "../headings/headings";
import MenuBar from "../menu/menu";
import "./mobsearch.css";
class MobSearch extends Component {
  state = {};

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <MenuBar />
          <div className="row">
            <div className="col-md-12 md12">
              <div className="row">
                <div className="col-md-6 l6" />
                <div className="col-md-6 r6 rmob-6">
                  <Headings />
                  <div className="row">
                    <div className="col-md-12">
                      <form>
                        <div className="form-group f-12">
                          <label>mobile number</label>
                          <input
                            type="text"
                            placeholder="enter mobile number"
                            className="form-control"
                          />
                        </div>
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                        >
                          search
                        </button>
                      </form>
                    </div>
                  </div>
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
