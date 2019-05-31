import React, { Component } from "react";
import "./amberzone.css";
class AmberZone extends Component {
    constructor(props) {
        console.log(props);
        super();
        this.state = {
        };
    }
    render() {
        return (

            <div className="col-md-3 pd12">
                <div className="row chld">
                    <div className="col-md-12">
                        <p>name : <span> {this.props.data.childName} </span></p>
                        <p>mobileno : <span> {this.props.data.mobileNbr} </span></p>
                        <p>RFID : <span> {this.props.data.rfidId} </span></p>
                    </div>

                    <div className="col-md-12 butn2">
                        <div className="row">
                            <div className="col-md-6 btn-1">
                                <button className="btn btn-block">
                                    end
                                                    </button>
                            </div>
                            <div className="col-md-6 btn-2">
                                <button className="btn btn-block">
                                    extend
                                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AmberZone;
