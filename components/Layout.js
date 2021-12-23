import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import { useLocalStorage } from "react-use";

const LayoutSection = styled.section`
  min-height: 100vh;
  width: 100%;
`;

const Layout = (props) => {
  const [isLoggedIn] = useLocalStorage("isLoggedIn", false);
  return (
    <LayoutSection>
      <Head>
        <title>Geeksynergy Technologies Pvt Ltd</title>
      </Head>
      <Navbar bg="dark" variant="dark" fixed="top" sticky="top">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>Geeksynergy Technologies Pvt Ltd</Navbar.Brand>
          </Link>
          <Nav>
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>Company Information</Nav.Link>
            </Link>
            {!isLoggedIn && (
              <Link href="/signup" passHref>
                <Nav.Link>Sign Up</Nav.Link>
              </Link>
            )}
            {!isLoggedIn && (
              <Link href="/signin" passHref>
                <Nav.Link>Sign In</Nav.Link>
              </Link>
            )}
            {isLoggedIn && (
              <Link href="/movies" passHref>
                <Nav.Link>Movies</Nav.Link>
              </Link>
            )}
            {isLoggedIn && (
              <Link href="/logout" passHref>
                <Nav.Link>Log Out</Nav.Link>
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>
      {props.children}
    </LayoutSection>
  );
};

export default Layout;
