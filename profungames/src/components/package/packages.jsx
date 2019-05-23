import React, { Component } from "react";
import Headings from "../headings/headings";
import { Accordion, Card } from "react-bootstrap";
class Packages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packagename: "pacakge Name",
      packagedes:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type"
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
                <div className="col-md-12 accordian-panel">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="packagename">
                        <div className="row">
                          <div className="pkgnm col-md-12">
                            <div className="row">
                              <div className="col-md-6">
                                {this.state.packagename}
                              </div>
                              <div className="col-md-6 addpackage">
                                <a href="#">+add package</a>
                              </div>
                            </div>
                          </div>

                          <div className="togglep col-md-12">
                            {this.state.packagedes}
                          </div>
                        </div>
                      </div>
                      <div className="packagename">
                        <div className="row">
                          <div className="pkgnm col-md-12">
                            <div className="row">
                              <div className="col-md-6">
                                {this.state.packagename}
                              </div>
                              <div className="col-md-6 addpackage">
                                <a href="#">+add package</a>
                              </div>
                            </div>
                          </div>

                          <div className="togglep col-md-12">
                            {this.state.packagedes}
                          </div>
                        </div>
                      </div>
                      <div className="packagename">
                        <div className="row">
                          <div className="pkgnm col-md-12">
                            <div className="row">
                              <div className="col-md-6">
                                {this.state.packagename}
                              </div>
                              <div className="col-md-6 addpackage">
                                <a href="#">+add package</a>
                              </div>
                            </div>
                          </div>

                          <div className="togglep col-md-12">
                            {this.state.packagedes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 buttons">
                    <button className="btn btn-primary" type="button">
                      next
                    </button>
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

export default Packages;
