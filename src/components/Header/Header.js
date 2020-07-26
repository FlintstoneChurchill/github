import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="dark" dark className="mb-3">
      <Container>
        <NavbarBrand href="/">Github</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              tag={RouterNavLink}
              to="/"
              exact
            >
              Main
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;