import React, { Component } from "react";
import "./dangerzone.css";
class DangerZone extends Component {
  constructor(props) {
    super();
    this.state = {
      childname: "Priyanka garg",
      mobno: "1234567890",
      rfid: "1234567890",
      active: "Danger Zone"
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12 safe danger">
          <h2>{this.state.active}</h2>

          <div className="row">
            <div className="col-md-6 pd12">
              <div className="row chld">
                <div className="col-md-12">
                  <h3>{this.state.childname}</h3>
                  <p>{this.state.mobno}</p>
                  <p>{this.state.rfid}</p>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6 icon">
                      <a href="#">
                        <i class="fa fa-thumbs-up" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="col-md-6 icon">
                      <a href="#">
                        <i class="fa fa-deviantart" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 pd12">
              <div className="row chld">
                <div className="col-md-12">
                  <h3>{this.state.childname}</h3>
                  <p>{this.state.mobno}</p>
                  <p>{this.state.rfid}</p>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6 icon">
                      <a href="#">
                        <i class="fa fa-thumbs-up" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="col-md-6 icon">
                      <a href="#">
                        <i class="fa fa-deviantart" aria-hidden="true" />
                      </a>
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

export default DangerZone;
