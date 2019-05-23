import React, { Component } from "react";
import Headings from "../headings/headings";
import "./login.css";
class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            RequestedAt: ""
        };
    }





    onSubmit = (evt) => {
        evt.preventDefault();
        if (this.state.username === "") {
            document.getElementById("usernamerror").innerHTML = "Email Required";
            document.getElementById("username").style.borderColor = "red";
        }

        else if (this.state.password === "") {
            document.getElementById("passworderror").innerHTML = "Password Required";
            document.getElementById("password").style.borderColor = "red";
        }

        else {
            this.props.login({ email: this.state.email, password: this.state.password, subdomain: this.props.location.state.subdomain }).then(() => {
                // this.props.history.push('/institutehome');
                return;
            })
        }
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
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group formdes">
                                            <label>emailid</label>
                                            <input
                                                type="email"
                                                value={this.state.username} onChange={(evt) => {
                                                    this.setState({ username: evt.target.value })
                                                }}
                                                placeholder="Enter Username"
                                                className="form-control"
                                                id="username"
                                            />
                                            <label className="text-danger" id="usernamerror"></label>
                                        </div>
                                        <div className="form-group formdes">
                                            <label>password</label>
                                            <input
                                                type="password"
                                                placeholder="enter password"
                                                className="form-control"
                                                value={this.state.password} onChange={(evt) => {
                                                    this.setState({ password: evt.target.value })
                                                }}
                                                id="password" />
                                            <label className="text-danger" id="passworderror"></label>
                                        </div>
                                        <div className="form-group formdes">

                                            <input
                                                type="text"
                                                className="form-control"
                                                value={this.state.RequestedAt} onChange={(evt) => {
                                                    this.setState({ RequestedAt: evt.target.value })
                                                }}
                                                id="RequestedAt" disabled />
                                            {/* <label className="text-danger" id="passworderror"></label> */}
                                        </div>

                                        <button className="btn btn-primary btn-block" type="submit">
                                            login
                                        </button>
                                    </form>
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
