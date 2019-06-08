import React, { Component } from "react";
import Headings from "../headings/headings";
import Menu from "../menu/menu";
import "./extend.css";
import { Accordion, Card } from "react-bootstrap";
class Extend extends Component {
  constructor(props) {
    super();
    this.state = {
      childname: "abc",
      product: "abc",
      currentpackage: "",
      moneycollected: "",
      packageduration: ""
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Menu />
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 l-md-6" />
                <div className="col-md-6 r-md-6">
                  <Headings />
                  <div className="row">
                    <div className="col-md-12">
                      <form>
                        <div className="f-12 ">
                          <label>child name : {this.state.childname} </label>
                        </div>
                        <div className="f-12 ">
                          <label>product : {this.state.product} </label>
                        </div>
                        <div className="f-12 ">
                          <label>
                            current package : {this.state.currentpackage}{" "}
                          </label>
                        </div>
                        <div className="f-12 ">
                          <label>
                            money collected : {this.state.moneycollected}{" "}
                          </label>
                        </div>
                        <div className="f-12 ">
                          <label>
                            package duration : {this.state.packageduration}{" "}
                          </label>
                        </div>
                        <div className="f-12 ">
                          <label>new package </label>
                        </div>

                        <div className="f-12 ">
                          <label>package </label>
                        </div>

                        <div className="f-12 ">
                          <label>money </label>
                        </div>
                        <div className="f-12 ">
                          <label>total </label>
                        </div>
                        <div className="f-12 ">
                          <label>mode of payment </label>
                        </div>
                        <div className="buttons">
                          <nav aria-label="Page navigation example row">
                            <ul className="pagination justify-content-center row">
                              <li className="page-item col-md-6">
                                <a className="page-link" href="#" tabindex="-1">
                                  Extend
                                </a>
                              </li>

                              <li className="col-md-6">
                                <button className="btn btn-block" type="submit">
                                  end
                                </button>
                              </li>
                            </ul>
                          </nav>
                        </div>
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

export default Extend;