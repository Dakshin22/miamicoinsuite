import React from "react";
import { Link } from "react-router-dom";
import { Image, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <Navbar expand="lg" sticky="top" variant="dark" bg="dark">
      <Navbar.Brand as={Link} to="/">
        Explore$MIA
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
