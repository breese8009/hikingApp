 import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import {Navbar, MenuItem, Nav, NavItem, NavDropdown} from 'react-bootstrap'





class Navbars extends Component {

  constructor(){

    super();

  }


logout(event){
window.location = "http://localhost:3000/login"

}



  render() {
    
  return (

<div>
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Hiker-X</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        
        <NavItem 
        onClick={event => this.logout(event)}
        >Logout</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</div>

  );
}
}

export default Navbars;






