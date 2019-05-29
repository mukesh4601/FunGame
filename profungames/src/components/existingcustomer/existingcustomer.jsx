import React, { Component } from "react";
import Headings from "../headings/headings";
import MenuBar from "../menu/menu";

import "./existingcustomer.css";

class ExistingCus extends Component {
  constructor(props) {
    super();
    this.state = {
      parentprofile:" customer profile ",
      firstname: "Priyanka",
      lastname: "garg",
      mobileno: "1234567890",
      emailid: "1234567890",
      childprofile:" child profile ",
      name: "Priyanka",
      dob: "dd-mm-yyyy",
      age:"00",
      gender:"female",
      action:"xxx",
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <MenuBar />
          </div>
         
            <div className="col-md-12 ch12">
              <div className="row">

              <div className="col-md-6 l-md-6" />
              <div className="col-md-6 r-md-6">
              <Headings />

              <div className="row">
                <div className="col-md-12 profilecontent">
                  <h2>{this.state.parentprofile}</h2>
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
                        <td>{this.state.firstname}</td>
                        <td>{this.state.lastname}</td>
                        <td>{this.state.mobileno}</td>
                        <td>{this.state.emailid}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-12 profilecontent">
                <h2>{this.state.childprofile}</h2>
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
                      <tr>
                        <td>{this.state.name}</td>
                        <td>{this.state.dob}</td>
                        <td>{this.state.age}</td>
                        <td>{this.state.gender}</td>
                        <td>
                          <a href="#">
                          <i class="fa fa-trash" aria-hidden="true" />
                          </a>
                            
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-12 buttons">
                 
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

    );
  }
}

export default ExistingCus;
