import React, { Component } from "react";
import actions from "../../Store/Actions/Index";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Headings from "../headings/headings";
import Menu from "../menu/menu";
import "./newcustomer.css";
import { Form, Button } from 'react-bootstrap';



class NewEntry extends Component {
    constructor(props) {
        super();
        this.state = {
            childs: [],
            clicks: 1,
            show: true,
            firstName: null,
            lastName: null,
            mobileNbr: null,
            emailAddress: null,
            name: null,
            dateOfBirth: null,
            sex: null,
            Customer: []
        };
    }

    async addNewChild() {
        await this.setState(prevState => {
            return {
                childs: prevState.childs.concat({
                    name: this.state.name,
                    dateOfBirth: this.state.dateOfBirth,
                    sex: this.state.sex
                }),
            };
        });
    };

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    };

    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.newcustomer({
            Customer: {
                FirstName: this.state.firstName,
                LastName: this.state.lastName,
                MobileNbr: this.state.mobileNbr,
                EmailAddress: this.state.emailAddress,
                Childs: this.state.childs
            },
        }).then(() => {
            this.props.history.push({
                // pathname: '/newentry'
            });
        })
        return;
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <Menu />

                    <div className="row  customerpanel">
                        <div className="col-md-12 md12">
                            <div className="row">
                                <div className="col-md-12 frm">
                                    <form className="col-md-12" onSubmit={this.onSubmit}>
                                        <div className="row ">

                                            <div className="col-md-6 cusdata lnc" >
                                                <Headings />
                                                <div className="row classparents">

                                                    <div className="form-group col-md-6">
                                                        <input
                                                            type="text"
                                                            placeholder="enter first name"
                                                            className="form-control"
                                                            value={this.state.firstName}
                                                            onChange={evt => {
                                                                this.setState({ firstName: evt.target.value });
                                                            }}
                                                            required />
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <input
                                                            type="text"
                                                            placeholder="enter last name"
                                                            className="form-control"
                                                            value={this.state.lastName}
                                                            onChange={evt => {
                                                                this.setState({ lastName: evt.target.value });
                                                            }}
                                                            required />

                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label>mobile number</label>
                                                        <input
                                                            type="number"
                                                            placeholder="enter mobile no"
                                                            className="form-control"
                                                            value={this.state.mobileNbr}
                                                            onChange={evt => {
                                                                this.setState({ mobileNbr: evt.target.value });
                                                            }}
                                                            required />
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label>emailid</label>
                                                        <input
                                                            type="email"
                                                            placeholder="enter email"
                                                            className="form-control"
                                                            value={this.state.emailAddress}
                                                            onChange={evt => {
                                                                this.setState({ emailAddress: evt.target.value });
                                                            }}
                                                            required />
                                                    </div>

                                                    <div className="col-md-12 justify-content-right">

                                                        <button
                                                            className="btn addchild"
                                                            type="submit">
                                                            Add Details
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>


                                            <div className="col-md-6 cusdata rnc">

                                                {this.state.childs.map((child, index) => {
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
                                                                    value={this.state.name}
                                                                    onChange={evt => {
                                                                        this.setState({ name: evt.target.value });
                                                                    }}
                                                                />
                                                            </div>

                                                            <div className="form-group f-12">
                                                                <label>date of birth</label>
                                                                <input
                                                                    type="date"
                                                                    placeholder="enter dob"
                                                                    className="form-control"
                                                                    value={this.state.dateOfBirth}
                                                                    onChange={evt => {
                                                                        this.setState({ dateOfBirth: evt.target.value });
                                                                    }}
                                                                />
                                                            </div>

                                                            <div className="form-group f-12">
                                                                <label>select gender</label>

                                                                <Form.Group controlId="formBasicName">
                                                                    <Form.Control as="select" value={this.state.sex} onChange={(evt) => {
                                                                        this.setState({ sex: evt.target.value })
                                                                    }}>
                                                                        <option>Select Gender</option>
                                                                        <option>Male</option>
                                                                        <option>Female</option>
                                                                    </Form.Control>
                                                                </Form.Group>

                                                            </div>
                                                        </div>
                                                    );
                                                })}

                                                <div className="row">
                                                    <div className="col-md-12 buttons">
                                                        <button type="button"
                                                            className="btn"
                                                            onClick={event => {
                                                                this.addNewChild();
                                                                // this.IncrementItem();
                                                            }}>
                                                            + add child
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
    newcustomer: v => dispatch(actions.newcustomer(v))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(NewEntry)
);
