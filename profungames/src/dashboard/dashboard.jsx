import React, { Component } from "react";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="adminprofile">
            <div className="row">
              <div className="col-md-12 bannerimg" />
            </div>
            <div className="row">
              <div className="col-md-12 profiledata">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-4 profileimg" />
                      <div className="col-md-6">
                        <div className="mid-div">
                          <h6>Name:</h6>
                          <p>Avishek</p>
                        </div>
                        <div className="mid-div">
                          <h6>email:</h6>
                          <p>dummy@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <table className="table-bordered">
                  <thead>
                    <tr>
                      <th> RFID No.</th>
                      <th> child name</th>
                      <th>start time</th>
                      <th>end time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>frgffb</td>
                      <td>childname</td>
                      <td>11:00 a.m</td>
                      <td>01:00 p.m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table-bordered">
                  <thead>
                    <tr>
                      <th> RFID No.</th>
                      <th> child name</th>
                      <th>start time</th>
                      <th>end time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>frgffb</td>
                      <td>childname</td>
                      <td>11:00 a.m</td>
                      <td>01:00 p.m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table-bordered">
                  <thead>
                    <tr>
                      <th> RFID No.</th>
                      <th> child name</th>
                      <th>start time</th>
                      <th>end time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>frgffb</td>
                      <td>childname</td>
                      <td>11:00 a.m</td>
                      <td>01:00 p.m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
