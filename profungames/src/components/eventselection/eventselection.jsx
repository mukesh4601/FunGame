import React, { Component } from "react";
import Headings from "../headings/headings";
import MenuBar from "../menu/menu";
import "./eventselection.css";
import { Form } from 'react-bootstrap';

import actions from "../../Store/Actions/Index";
import { connect } from "react-redux";
import { withRouter } from "react-router";
class EventSelection extends Component {
    constructor(props) {
        super();
        this.state = {
            childname: null,
            money: null,
            selectedProduct: null,
            linkedPackages: []
        };
    }

    async  componentDidMount() {
        if (!localStorage.getItem("token")) {
            this.props.history.push({
                pathname: '/',
            });
        }
        await this.props.allproducts();
        let allproducts = [];
        let allpackages = [];
        for (var i = 0; i < allproducts; i++) {

        }
        for (var j = 0; j < allpackages; j++) {
        }
        console.log(this.props);
        // this.setState({
        //     childname: this.props.location.state.alldetails.name,
        // });
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let foo = params.get('childname');
        this.setState({ childname: foo })
    }

    onformsubmit = (evt) => {
        evt.preventDefault();

        this.props.history.push({
            pathname: '/coupon',
            //     // state: {
            //     //     summary: {
            //     //         eventselection: this.props.location.state.summary,
            //     //         money: this.state.money,
            //     //     }
            // }
        })
    }

    render() {
        return (
            <div className="row" >
                <div className="col-md-12">
                    <MenuBar />
                    <div className="row">
                        <div className="col-md-6 l-md-6" />
                        <div className="col-md-6 r-md-6">
                            <Headings />
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="evenrform">
                                        <form onSubmit={this.onformsubmit}>
                                            <div className="f-12">
                                                <label>child name : {this.state.childname}</label>
                                            </div>
                                            <div className="form-group f-12">
                                                <label>select product</label>

                                                <Form.Group controlId="formBasicName">
                                                    <Form.Control as="select" value={this.state.firstName}
                                                        onChange={(evt) => {
                                                            let product = this.props.products.products.items.filter((p) => p.productID == evt.target.value);
                                                            let packages = product[0].linkedPackages || [];
                                                            this.setState({ 'selectedProduct': evt.target.value, 'linkedPackages': packages })
                                                        }} >
                                                        <option>Select Product</option>
                                                        {this.props.products.products.items && this.props.products.products.items && this.props.products.products.items.map((allproducts, index) => (
                                                            <option value={allproducts.productID}> {allproducts.name}   ( {allproducts.description}  )</option>
                                                        ))}
                                                    </Form.Control>
                                                </Form.Group>

                                            </div>

                                            <div className="form-group f-12" >
                                                <label>select package</label>

                                                <Form.Group controlId="formBasicName">
                                                    <Form.Control as="select" id="money" value={this.state.money} onChange={evt => {
                                                        this.setState({ money: evt.target.value });
                                                    }}>
                                                        {this.state.linkedPackages.map((p) => {
                                                            return (
                                                                <option value={p.money} >   Package Name :  {p.name} --
                                                                    Package Duration :  {p.duration} Mins --
                                                                    Total Money :  {p.money} </option>
                                                            )
                                                        })}
                                                    </Form.Control>
                                                </Form.Group>
                                            </div>
                                            <div className="f-12">
                                                <label>RFID</label>
                                                <input
                                                    type="text"
                                                    placeholder="enter rfid"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="f-12">
                                                <label> Money : {this.state.money}</label>
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
    products: state.allproducts
});
const mapDispatchToProps = dispatch => ({
    allproducts: (v) => dispatch(actions.allproducts(v)),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(EventSelection)
);