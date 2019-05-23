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
                    <div className="form-group formdes">
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
                  <button className="btn btn-primary btn-block" type="submit">
                    login
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 connectlink">
                  <a href="#">forgot password?</a>
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
