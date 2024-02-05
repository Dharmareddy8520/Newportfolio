// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container className="">
        <Link className="navbar-brand mx-5 justify-content-evenly" to="/">
          HI
        </Link>
        <BootstrapNavbar.Toggle aria-controls="navbarNav" />
        <BootstrapNavbar.Collapse id="navbarNav " className="lol">
          <Nav className="ml-auto mx-5">
            <Nav.Item className="oops">
              <Link className="nav-link mx-5 " to="/">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className="oopss">
              <Link className="nav-link mx-5" to="/about">
                About
              </Link>
            </Nav.Item>
            <Nav.Item className="oopss">
              <Link className="nav-link mx-5" to="/skills">
                Skills
              </Link>
            </Nav.Item>
            <Nav.Item className="oopss">
              <Link className="nav-link mx-5" to="/work">
                Work
              </Link>
            </Nav.Item>
            <Nav.Item className="oopss">
              <Link className="nav-link mx-5" to="/contact">
                Contact
              </Link>
            </Nav.Item>
            <Nav.Item className="oopss">
              <Link className="nav-link mx-5" to="/resume">
                Resume
              </Link>
            </Nav.Item>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
