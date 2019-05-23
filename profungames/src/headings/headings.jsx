import React, { Component } from "react";

class Headings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "welcome little guests",
      subtitle:
        "Every child is a different kind of flower and together make this world a beautiful garden."
    };
  }
  render() {
    return (
      <div className="row">
        <div className="heading">
          <div className="col-md-12">
            <h2>{this.state.title}</h2>
            <p>{this.state.subtitle}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Headings;
