import React, { Component } from "react";
import Headings from "../headings/headings";
import { Accordion, Card } from "react-bootstrap";
class Coupons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12 panel">
          <div className="row">
            <div className="col-md-6 left" />
            <div className="col-md-6 right">
              <Headings />
              <div className="row">
                <div className="col-md-12">
                  <form>
                    <div className="form-group formdes ">
                      <label>coupon number</label>
                      <input
                        type="text"
                        placeholder="enter coupon no"
                        className="form-control"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 buttons">
                  <div className="">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item col-md-6">
                          <a className="page-link" href="#" tabindex="-1">
                            previous
                          </a>
                        </li>

                        <li className="page-item col-md-6">
                          <a className="page-link" href="#" tabindex="+1">
                            next
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
      </div>
    );
  }
}

export default Coupons;
