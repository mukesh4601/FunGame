import React, { Component } from "react";
import Headings from "./headings";
import { Accordion, Card } from "react-bootstrap";
import { DropdownButton, Dropdown } from "react-bootstrap";
class EventSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childname: "Priyanka"
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 panel">
          <div className="row">
            <div className="col-md-6 left" />
            <div className="col-md-6 right">
              <Headings />
              <div className="row">
                <div className="col-md-12">
                  <div className="evenrform">
                    <form>
                      <div className="formdes">
                        <label>child name : priyanka</label>
                      </div>
                      <div className="form-group formdes">
                        <label>select product</label>

                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            select product
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              train
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              ice cream
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              ship
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <div className="form-group formdes">
                        <label>select package</label>

                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            select package
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              rs 100 for 1 hour
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              rs200 for 2 hour
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              rs 300 for 3 hour
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="formdes">
                        <label>RFID</label>
                        <input
                          type="text"
                          placeholder="enter rfid"
                          className="form-control"
                        />
                      </div>
                      <div className="formdes">
                        <label>money : 300 Rs.</label>
                      </div>
                    </form>
                  </div>
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
                          <a className="page-link" href="#" tabindex="-1">
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

export default EventSelection;
