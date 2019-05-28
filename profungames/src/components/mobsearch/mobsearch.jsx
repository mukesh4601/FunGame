import React, { Component } from "react";
import Headings from "../headings/headings";
import MenuBar from "../menu/menu";
import "./mobsearch.css";
import { connect } from "react-redux";
import actions from "../../Store/Actions/Mobile";
import { withRouter } from "react-router";
import { createAction } from "redux-actions";
import axios from "axios";
import { BACKEND_URL } from "../../config";

class MobSearch extends Component {
  constructor() {
    super();
    this.state = {
      mobileno: ""
    };
  }
  btnClick = evt => {
    if (this.state.mobileno != "") {
      axios
        .get(
          BACKEND_URL +
            "api/customer?SearchCriteria=0&SearchTerm=" +
            this.state.mobileno
        )
        .then(
          res => {
            console.log("Done successful", res);
            this.props.history.push("/existingcus");
          },
          err => {
            console.log("Error");
          }
        );
      return;
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <MenuBar />

          <div className="col-md-12 md12">
            <div className="row">
              <div className="col-md-6 l6" />
              <div className="col-md-6 r6 rmob-6">
                <Headings />
                <div className="row">
                  <div className="col-md-12">
                    <form>
                      <div className="form-group f-12">
                        <label>mobile number</label>
                        <input
                          type="text"
                          placeholder="enter mobile number"
                          className="form-control"
                          id="mobileno"
                          value={this.state.mobileno}
                          onChange={evt => {
                            this.setState({ mobileno: evt.target.value });
                          }}
                        />
                        <label className="text-danger" id="mobilenoerror" />
                      </div>
                      <button
                        className="btn btn-primary btn-block"
                        type="button"
                        onClick={() => this.btnClick()}
                      >
                        search
                      </button>
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
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  searchmobile: v => dispatch(actions.searchmobile(v))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MobSearch)
);
