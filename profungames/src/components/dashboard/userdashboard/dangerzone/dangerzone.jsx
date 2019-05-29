import React, { Component } from "react";
import "./dangerzone.css";
class DangerZone extends Component {
  constructor(props) {
    super();
    this.state = {
        childname: "Priyanka garg",
        mobno: "1234567890",
        rfid: "1234567890",
        active: "Safe Zone"
    };
}
render() {
    return (
        <div className="row">
            <div className="col-md-12 safe1">
                <div className="row">

                    <div className="col-md-3 pd12">
                        <div className="row chld">
                                    <div className="col-md-12">
                                        <p>name : <span> {this.state.childname} </span></p>
                                        <p>mobileno : <span> {this.state.mobno} </span></p>
                                        <p>RFID : <span> {this.state.rfid} </span></p>
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
                    </div>
                    
        </div>
        </div>

         
    );
}
}

export default DangerZone;
