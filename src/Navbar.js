import React from "react";
import { Link } from "react-router-dom";
import { Image, NavDropdown, Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FaCity } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
            <FaCity/> {" "}
          Explore$MIA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/workspaces"}>
              Workspace Benefits
            </Nav.Link>
            <Nav.Link as={Link} to={"/chat"}>
              Chat With Titan
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
