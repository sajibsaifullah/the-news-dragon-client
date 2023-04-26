import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                <Link className="text-decoration-none" to="/category/0">Home</Link>
                <Link className="mx-2 text-decoration-none" to="/category/0">About</Link>
                <Link className="text-decoration-none" to="/category/0">Career</Link>
              {/* <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link> */}
            </Nav>
            <Nav>
              {user && (
                <FaUserCircle style={{ fontSize: "2.5rem" }}></FaUserCircle>
              )}

              {user ? (
                <Button variant="danger">Logout</Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;