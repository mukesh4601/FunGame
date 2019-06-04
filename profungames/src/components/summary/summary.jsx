import React, { Component } from "react";
import Headings from "../headings/headings";
import MenuBar from "../menu/menu";
import "./summary.css";
class Summary extends Component {
    constructor(props) {
        super();
        this.state = {
            parentname: "rajinder kumar",
            firstchildname: "Priyanka",
            productname: "1234567890",
            packagename: "1234567890",
            childprofile: " child profile ",
            secondchilname: "Priyanka",
            productname: "1234567890",
            packagename: "1234567890",
        };
    }


    componentDidMount() {
        console.log(this.props.location);
    }



    render() {
        return (
            <div className="row">
                <div className="col-md-12 panel">
                    <MenuBar />
                    <div className="row">
                        <div className="col-md-6 l-md-6" />
                        <div className="col-md-6 r-md-6">
                            <Headings />
                            <div className="row">
                                <div className="col-md-12 summarylist">
                                    <h2>Summary</h2>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <ul>
                                                        <li>parent name :</li>
                                                        <li>first child name :</li>
                                                        <li>product name :</li>
                                                        <li>package name :</li>
                                                        <li>second child name :</li>
                                                        <li>product name :</li>
                                                        <li>package name :</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <ul>
                                                        <li>{this.state.parentname}</li>
                                                        <li>{this.state.firstchildname}</li>
                                                        <li>{this.state.productname}</li>
                                                        <li>{this.state.packagename}</li>
                                                        <li>{this.state.secondchilname}</li>
                                                        <li>{this.state.productname}</li>
                                                        <li>{this.state.packagename}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
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
                                                    <a className="page-link" href="#" tabindex="+1">
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

export default Summary;
