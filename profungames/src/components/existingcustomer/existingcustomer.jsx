import React, { Component } from "react";
import Headings from "./headings";
import MenuBar from "./menu";
class ExistingCus extends Component {
  state = {
    // rows: []
  };
  // handleChange = idx => e => {
  //   const { name, value } = e.target;
  //   const rows = [...this.state.rows];
  //   rows[idx] = {
  //     [name]: value
  //   };
  //   this.setState({
  //     rows
  //   });
  // };
  // handleAddRow = () => {
  //   const item = {
  //     name: "",
  //     dob: "",
  //     childage: "",
  //     gender: ""
  //   };
  //   this.setState({
  //     rows: [...this.state.rows, item]
  //   });
  // };
  // handleRemoveRow = () => {
  //   this.setState({
  //     rows: this.state.rows.slice(0, -1)
  //   });
  // };
  render() {
    return (
      <div className="row">
        <div className="col-md-12 panel">
          <MenuBar />
          <div className="row">
            <div className="col-md-6 left leftexisting" />
            <div className="col-md-6 right">
              <Headings />
              <div className="row">
                <div className="col-md-12">
                  <div className="profile-type">
                    <h2>customer profile</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 profilecontent">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>first name</th>
                        <th>last name</th>
                        <th>mobile no</th>
                        <th>emailid</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>priyanka</td>
                        <td>garg</td>
                        <td>1234567890</td>
                        <td>demo@gmail.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="profile-type">
                    <h2>children profile</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 profilecontent">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>name</th>
                        <th>date of birth</th>
                        <th>age</th>
                        <th>gender</th>
                        <th>action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {this.state.rows.map((item, idx) => (
                        <tr id="addr0" key={idx}>
                          <td>{idx}</td>

                          <tr>
                            <td value={this.state.rows[idx].name} />
                            <td value={this.state.rows[idx].dob} />
                            <td value={this.state.rows[idx].childage} />
                            <td value={this.state.rows[idx].gender} />
                            <td>
                              <div className="form-btn">
                                <button
                                  type="btn btn-default btn-block btn-xs"
                                  onClick={this.handleRemoveRow}
                                >
                                  <i class="fa fa-trash" aria-hidden="true" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tr>
                      ))} */}
                      <tr>
                        <td>priyanka</td>
                        <td>30/10/1993</td>
                        <td>25</td>
                        <td>female</td>
                        <td>
                          <div className="form-btn">
                            <button type="btn btn-default btn-block btn-xs">
                              <i class="fa fa-trash" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 buttons">
                  <div className="">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item col-md-4">
                          <a className="page-link" href="#" tabindex="-1">
                            previous
                          </a>
                        </li>
                        <li className="page-item col-md-4">
                          <a className="page-link" href="#" tabindex="-1">
                            undo
                          </a>
                        </li>
                        <li className="page-item col-md-4">
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

export default ExistingCus;
