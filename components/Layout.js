import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

const LayoutSection = styled.section`
  min-height: 100vh;
  width: 100%;
`;

const Layout = (props) => {
  return (
    <LayoutSection>
      <Head>
        <title>Movies</title>
      </Head>
      <Navbar bg="dark" variant="dark" fixed="top" sticky="top">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>Movies</Navbar.Brand>
          </Link>
          <Nav >
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/signup" passHref>
              <Nav.Link>Sign Up</Nav.Link>
            </Link>
            <Link href="/signin" passHref>
              <Nav.Link>Sign In</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      {props.children}
    </LayoutSection>
  );
};

export default Layout;
