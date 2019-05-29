import React, { Component } from "react";
import Headings from "../headings/headings";
import MenuBar from "../menu/menu";
import "./coupons.css";
import { Accordion, Card } from "react-bootstrap";
class Coupons extends Component {
  constructor(props) {
    super();
    this.state = {
      payment:"500 rs ",
      modeofpayment:"500 rs ",
      finalpayment:"500 rs ",
    };
  }
  

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <MenuBar />
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
                          <label>total payment : {this.state.payment} </label>
                        </div>
                        <div className="form-group f-12 ">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="row">
                                <label className="col-md-3">coupon code</label>
                                <input
                                  type="text"
                                  placeholder="coupon no"
                                  className="form-control col-md-6"
                                />
                                <div className="col-md-1" />
                                <button
                                  className="col-md-2"
                                  type="btn btn-block"
                                >
                                  check
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="f-12 ">
                          <label>Mode of payment : {this.state.modeofpayment} </label>
                        </div>
                        <div className="f-12 ">
                          <label>final amount :  {this.state.finalpayment}</label>
                        </div>
                        <div className="buttons">
                          <nav aria-label="Page navigation example row">
                            <ul className="pagination justify-content-center row">
                              <li className="page-item col-md-6">
                                <a className="page-link" href="#" tabindex="-1">
                                  previous
                                </a>
                              </li>

                              <li className="col-md-6">
                                <button className="btn btn-block" type="submit">
                                  finish
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

export default Coupons;
