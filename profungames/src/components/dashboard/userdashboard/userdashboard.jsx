import React, { Component } from "react";
import MenuBar from "../../menu/menu";
import SafeZone from "../userdashboard/safezone/safezone";
import AmberZone from "../userdashboard/amberzone/amberzone";
import DangerZone from "../userdashboard/dangerzone/dangerzone";
import "./userdashboard.css";
class UserDashboard extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <MenuBar />

                </div>

                <div className="col-md-12">
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
                </div>


            </div>
        );
    }
}

export default UserDashboard;
