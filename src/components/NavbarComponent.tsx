import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "../styles/navbar.css";

const NavbarComponent = () => {
  return (
    <div id="navbarComponent">
      <Navbar id="navbarStyling" bg="dark" expand={false} fixed="top">
        <Container fluid>
          <Navbar.Brand id="navbarTitle" href="#">
            Grumpy Gorilla Gang
          </Navbar.Brand>
          <Navbar.Toggle id="menuBtn" aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Grumpy Gorilla Gang
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#landingComponent">Home</Nav.Link>
                <Nav.Link href="#roadmapContainer">Roadmap</Nav.Link>
                <Nav.Link href="#aboutComponent">About us</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
