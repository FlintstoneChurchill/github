import React from "react";
import {Container} from "reactstrap";
import Header from "../Header/Header";

const Layout = props => {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main>
        <Container>
          {props.children}
        </Container>
      </main>
    </>
  );
};

export default Layout;