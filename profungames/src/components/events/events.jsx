import React, { Component } from "react";
import Headings from "../headings/headings";
import { Accordion, Card } from "react-bootstrap";
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventname: "Event Name",
      eventdes:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type"
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 panel">
          <div className="row">
            <div className="col-md-6 left" />
            <div className="col-md-6 right">
              <Headings />
              <div className="row">
                <div className="col-md-12 accordian-panel">
                  <Accordion>
                    <Card className="cardpanel">
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="toggle"
                      >
                        {this.state.eventname}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className="togglep">
                          {this.state.eventdes}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <Accordion>
                    <Card className="cardpanel">
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="1"
                        className="toggle"
                      >
                        {this.state.eventname}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body className="togglep">
                          {this.state.eventdes}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <Accordion>
                    <Card className="cardpanel">
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="2"
                        className="toggle"
                      >
                        {this.state.eventname}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body className="togglep">
                          {this.state.eventdes}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <Accordion>
                    <Card className="cardpanel">
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="3"
                        className="toggle"
                      >
                        {this.state.eventname}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body className="togglep">
                          {this.state.eventdes}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 buttons">
                  <button className="btn btn-primary" type="button">
                    next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
