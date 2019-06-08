import React, { Component } from "react";
import { Modal}  from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "./dangerzone.css";

class DangerZone extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
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
                                <Button className="btn btn-block"  onClick={this.handleShow}>
                                    extend
                                </Button>
                                <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default DangerZone;
