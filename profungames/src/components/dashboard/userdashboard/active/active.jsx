import React, { Component } from "react";

class Active extends Component {
  constructor() {
    super();
    this.state = {
      childname: "Priyanka garg",
      mobno: "1234567890",
      rfid: "1234567890"
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <div class="card">
                <div class="card-body">
                  <p class="card-text">{this.state.childname}</p>
                  <p class="card-text">{this.state.mobno}</p>
                  <p class="card-text">{this.state.rfid}</p>
                  <div className="row">
                    <div className="col-sm-6">
                      <a href="#">Extend</a>
                    </div>
                    <div className="col-sm-6 rgt">
                      <a href="#">Delete</a>
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

export default Active;
