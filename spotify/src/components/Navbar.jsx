import React from "react";
import {Navbar, Nav} from "react-bootstrap"



const NavBar = () =>{
    return(
   <Navbar >
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#link">Features</Nav.Link>
      <Nav.Link href="#link">Pricing</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    
      )
}


export default NavBar;