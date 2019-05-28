import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, Brand } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./menu.css";
class MenuBar extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            className="navigation"
          >
            <Navbar.Brand href="#">logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link href="#">home</Link>
                <Link to="/mobsearch">start new business</Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default MenuBar;
