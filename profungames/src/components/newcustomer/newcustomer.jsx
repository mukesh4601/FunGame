import React, { Component } from "react";
import Headings from "../headings/headings";
import Menu from "../menu/menu";
import "./newcustomer.css";
class NewEntry extends Component {
  constructor() {
    super();
    this.state = {
      children: [],
      clicks: 1,
      show: true
    };
  }

  componentDidMount() {
    this.addNewChild();
  }

  addNewChild = () => {
    this.setState(prevState => {
      return {
        children: prevState.children.concat({
          name: "",
          dob: null,
          gender: ""
        })
      };
    });
  };
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Menu />

          <div className="row  customerpanel">
            <div className="col-md-12 md12">
              <div className="row">
                <div className="col-md-12 frm">
                  <div className="row">
                    <div className="col-md-6 cusdata lnc">
                      <Headings />
                      <div className="row">
                        <form className="col-md-12">
                          <div className="form-group f-12">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  placeholder="enter first name"
                                  className="form-control"
                                />
                              </div>

                              <div className="col-md-6">
                                <input
                                  type="text"
                                  placeholder="enter last name"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="form-group f-12">
                            <label>mobile number</label>
                            <input
                              type="text"
                              placeholder="enter mobile no"
                              className="form-control"
                            />
                          </div>

                          <div className="form-group f-12">
                            <label>emailid</label>
                            <input
                              type="text"
                              placeholder="enter email"
                              className="form-control"
                            />
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="col-md-6 cusdata rnc">
                      <form>
                        {this.state.children.map((child, index) => {
                          return (
                            <div className="childtbl" key={index}>
                              <div className="row">
                                <div className="col-md-12 childno">
                                  <p>Child {this.state.clicks}</p>
                                </div>
                              </div>
                              <div className="form-group f-12">
                                <label>child name</label>
                                <input
                                  type="text"
                                  placeholder="enter child name"
                                  className="form-control"
                                />
                              </div>

                              <div className="form-group f-12">
                                <label>date of birth</label>
                                <input
                                  type="date"
                                  placeholder="enter dob"
                                  className="form-control"
                                />
                              </div>

                              <div className="form-group f-12">
                                <label>select gender</label>
                                <div className="">
                                  <label>
                                    <input
                                      type="radio"
                                      name="gender"
                                      value="male"
                                      checked
                                    />
                                    male
                                  </label>
                                </div>
                                <div className="radio">
                                  <label>
                                    <input
                                      type="radio"
                                      name="gender"
                                      value="female"
                                    />
                                    female
                                  </label>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </form>
                      <div className="row">
                        <div className="col-md-12 buttons">
                          <div className="">
                            <nav aria-label="Page navigation example">
                              <ul className="pagination justify-content-center">
                                <li className="page-item col-md-4">
                                  <a
                                    className="page-link"
                                    href="#"
                                    tabindex="-1"
                                  >
                                    previous
                                  </a>
                                </li>
                                <li className="page-item col-md-4">
                                  <button
                                    className="btn-block"
                                    onClick={event => {
                                      this.addNewChild();
                                      this.IncrementItem();
                                    }}
                                  >
                                    + add child
                                  </button>
                                </li>
                                <li className="page-item col-md-4">
                                  <a
                                    className="page-link"
                                    href="#"
                                    tabindex="+1"
                                  >
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewEntry;
