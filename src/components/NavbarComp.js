import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import image from "../image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const NavbarComp = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={image}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Series</Nav.Link>
            <Nav.Link href="#pricing">Movies</Nav.Link>
          </Nav>
          <Nav>
            <Form className="d-flex mx-2">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                variant="outline-danger"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
            <Button variant="outline-danger">
              Login <FontAwesomeIcon icon={faUserCircle} className="ms-3" />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;