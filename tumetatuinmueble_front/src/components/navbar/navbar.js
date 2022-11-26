import React from "react";
import { Navbar,Container, Nav,DropdownButton,Dropdown,Row,} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse} from "@fortawesome/free-solid-svg-icons";
//import {fa-duotone fa-user} from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";
//import {<fa-regular fa-user-astronaut} from '@fortawesome/free-solid-svg-icons';
// import logo from"../../images/logo.png";
export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
       
      <Navbar fixed="top" className="navbar"  expand="lg" variant="dark" >
        <FontAwesomeIcon icon="fa-duotone fa-user" />
        <Container>
          <Navbar.Brand href="#home" >Tu meta, tu inmueble
          </Navbar.Brand>
          {/* <div className="logo">
            <img src={logo}alt="logo"  className="imagen"    />
          </div> */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            
          />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav id="" className="me-auto" >
              {/*<Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
    <NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
            </Nav>
            
            <DropdownButton id="dropdown-basic-button" title="Usuario" >
              <Dropdown.Header id="dropdown-header" >
                <Row>
                <FontAwesomeIcon icon={ faHouse}  />
                </Row>
                <Row>#Usuario#</Row>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-1">Cerrar Sesion</Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    );
  }
}
