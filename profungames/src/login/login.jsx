import React, { Component } from "react";
import Headings from "../headings/headings";

class Login extends Component {
  state = {
    emailid: "",
    password: ""
  };

  onValueChange = (prop, value) => {
    this.setState({
      [prop]: value
    });
  };

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
                      <label>emailid</label>
                      <input
                        type="email"
                        value={this.state.emailid}
                        onChange={e =>
                          this.onValueChange("emailid", e.target.value)
                        }
                        placeholder="enter emailid"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group formdes">
                      <label>password</label>
                      <input
                        type="password"
                        placeholder="enter password"
                        className="form-control"
                        value={this.state.password}
                        onChange={e =>
                          this.onValueChange("password", e.target.value)
                        }
                      />
                    </div>
                    <div class="form-group formdes">
                      <label role="checkbox">
                        <input type="checkbox" />
                        Remember me
                      </label>
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

export default Login;
