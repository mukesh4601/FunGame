import React, { Component } from "react";
import Headings from "../headings/headings";
import MenuBar from "../menu/menu";
import "./coupons.css";
import actions from "../../Store/Actions/Index";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Form, Button } from 'react-bootstrap';


class Coupons extends Component {
    constructor(props) {
        super();
        this.state = {
            payment: null,
            modeofpayment: "Cash",
            finalpayment: null,
            couponcode: null
        };
    }
    async  componentDidMount() {
        if (!localStorage.getItem("token")) {
            this.props.history.push({
                pathname: '/',
            });
        }
        this.setState({
            payment: this.props.location.state.alldetails.money,
            finalpayment: this.props.location.state.alldetails.money
        });
        console.log(this.props.location.state);
    }

    async componentWillReceiveProps() {
        await this.props.couponcheck();
        console.log(this.props.coupons);
    }


    onSubmit = async (evt) => {
        evt.preventDefault();
        this.props.history.push({
            pathname: '/summary',
            state: {
                alldetails: this.props.location.state.alldetails,
            }
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <MenuBar />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6 l-md-6" />
                                <div className="col-md-6 r-md-6">
                                    <Headings />
                                    <div className="row">
                                        <form onSubmit={this.onSubmit}>
                                            <div className="col-md-12">

                                                <div className="f-12 ">
                                                    <label>total payment : <strong>{this.state.payment} </strong></label>
                                                </div>
                                                {/* <div className="form-group f-12 ">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <label className="form-group">coupon code</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="coupon no"
                                                                        className="form-control col-md-12" value={this.state.couponcode} onChange={evt => {
                                                                            this.setState({ couponcode: evt.target.value });
                                                                        }} />
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <button
                                                                        className="col-md-12"
                                                                        type="btn btn-block">
                                                                        check
                                                                 </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                <div className="f-12 ">
                                                    <label>Mode of payment : <strong> {this.state.modeofpayment}</strong> </label>

                                                    <Form.Group controlId="formBasicName">
                                                        <Form.Control as="select" value={this.state.modeofpayment} onChange={evt => {
                                                            this.setState({ modeofpayment: evt.target.value });
                                                        }}>
                                                            <option>Cash</option>
                                                            <option>Paytm</option>
                                                            <option>Net Banking</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </div>
                                                <div className="f-12 ">
                                                    <label>final amount : <strong> {this.state.finalpayment}</strong></label>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 buttons">
                                                        <div className="row">
                                                            <div className="col-md-6 text-left">
                                                                <button className="btn btn-block">Previous</button>
                                                            </div>
                                                            <div className="col-md-6 text-left">
                                                                <button className="btn btn-block" type="submit">Next</button>
                                                            </div>
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
            </div>
        );
    }
}


const mapStateToProps = state => ({
    coupons: state.allproducts
});
const mapDispatchToProps = dispatch => ({
    couponcheck: (v) => dispatch(actions.couponcheck(v)),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Coupons)
);