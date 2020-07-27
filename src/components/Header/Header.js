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
    <Navbar color="dark" dark className="mb-3" expand="xs">
      <Container>
        <NavbarBrand tag={RouterNavLink} to="/">
          Github
        </NavbarBrand>
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
          <NavItem>
            <NavLink
              tag={RouterNavLink}
              to="/users"
              exact
            >
              Users
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;