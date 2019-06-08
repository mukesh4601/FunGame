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
        super(props);
        this.state = {
            payment: null,
            modeofpayment: "Cash",
            finalpayment: null,
            couponcode: null,
            RFIDID: null
        };
    }
    async  componentDidMount() {
        if (!localStorage.getItem("token")) {
            this.props.history.push({
                pathname: '/',
            });
        }
        await this.props.getmodeofpayment();
        let paredetails = localStorage.getItem("parentdetails");
        let result = JSON.parse(paredetails);
        let productdetail = localStorage.getItem("productdetails");
        let presult = JSON.parse(productdetail);
        this.setState({
            payment: presult.money,
            finalpayment: presult.money
        });
        console.log(this.props.payment.modeofpayment.items);
        let paymentmode = [];
        for (var i = 0; i < paymentmode; i++) {

        }
    }


    getmodeofpayment = async (evt) => {
        evt.preventDefault();
        await this.props.getmodeofpayment({
        }).then(() => {
        })
    }



    sumbitalldetails = async (evt) => {
        evt.preventDefault();
        let paredetails = localStorage.getItem("parentdetails");
        let result = JSON.parse(paredetails);
        let productdetail = localStorage.getItem("productdetails");
        let presult = JSON.parse(productdetail);
        await this.props.activity({
            CustomerID: result.customerID,
            ActualMoneyCollected: this.state.finalpayment,
            TotalPackageCost: this.state.payment,
            Childs: [{
                ChildID: result.childId,
                PackageID: presult.ProductID,
                RFIDFlag: true,
                RFIDID: this.state.RFIDID
            }]
        }).then(() => {
            this.props.history.push({
                pathname: '/userdashboard',
            });
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
                                        <form onSubmit={this.sumbitalldetails}>
                                            <div className="col-md-12">

                                                <div className="f-12 ">
                                                    <label>total payment : <strong>{this.state.payment} </strong></label>
                                                </div>

                                                <div className="f-12 ">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <label>Mode of payment : <strong> {this.state.modeofpayment}</strong> </label>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <Form.Group controlId="formBasicName">
                                                                <Form.Control as="select" value={this.state.modeofpayment} onChange={evt => {
                                                                    this.setState({ modeofpayment: evt.target.value });
                                                                }}>
                                                                    {this.props.payment.modeofpayment.items && this.props.payment.modeofpayment.items && this.props.payment.modeofpayment.items.map((paymentmode) => {
                                                                        return (
                                                                            <option >   {paymentmode.paymentName}
                                                                            </option>
                                                                        )
                                                                    })}
                                                                </Form.Control>
                                                            </Form.Group>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="f-12 ">
                                                    <label>final amount : <strong> {this.state.finalpayment}</strong></label>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 buttons">
                                                        <div className="row">
                                                            {/* <div className="col-md-6 text-left">
                                                                <button className="btn btn-block">Previous</button>
                                                            </div> */}
                                                            <div className="col-md-6 text-left">
                                                                <button className="btn btn-block" type="submit">Buy</button>
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
    coupons: state.allproducts,
    payment: state.allproducts
});
const mapDispatchToProps = dispatch => ({
    couponcheck: (v) => dispatch(actions.couponcheck(v)),
    activity: (v) => dispatch(actions.activity(v)),
    getmodeofpayment: (v) => dispatch(actions.getmodeofpayment(v)),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Coupons)
);