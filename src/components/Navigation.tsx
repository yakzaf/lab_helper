import React, { FC } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation: FC = () => {
  return (
    <div className="navbar">
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar>
            <Navbar.Brand>Lab Helper</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/circuit-sim">
                  Falstad Circuit Simulator
                </Nav.Link>
                <Nav.Link as={Link} to="/generate-instruction">
                  Instruction Generator
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
