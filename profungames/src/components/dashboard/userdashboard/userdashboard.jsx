import React, { Component } from "react";
import MenuBar from "../../menu/menu";
import {Tabs, Tab} from 'react-bootstrap'
import SafeZone from "../userdashboard/safezone/safezone";
import AmberZone from "../userdashboard/amberzone/amberzone";
import DangerZone from "../userdashboard/dangerzone/dangerzone";
import "./userdashboard.css";
class UserDashboard extends Component {
    constructor(props, context) {
        super(props, context);
    this.state = {
      key: 'safezone',
    };
}
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <MenuBar />

                </div>
                
                <div className="col-md-12 userboard">
                <Tabs id="controlled-tab-example" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
                    <Tab eventKey="safezone" title="safezone" className="safe">
                    <SafeZone />
                    <a href="#"><i className="fa fa-user-plus" aria-hidden="true"></i></a>
                    </Tab>
                    <Tab eventKey="amberzone" title="amberzone" className="amber">
                    <AmberZone />
                    </Tab>
                    <Tab eventKey="dangerzone" title="dangerzone" className="danger">
                    <DangerZone />
                    </Tab>
                </Tabs>


                </div>
                
                {/* <div className="col-md-12">
                    <div class="row cards">
                        <div className="col-md-4">
                            <SafeZone />
                        </div>
                        <div className="col-md-4">
                            <AmberZone />
                        </div>
                        <div className="col-md-4">
                            <DangerZone />
                        </div>
                    </div>
                </div> */}


            </div>
        );
    }
}

export default UserDashboard;
