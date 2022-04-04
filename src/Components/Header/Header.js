import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <Navbar expand='lg' className='header'>
        <Container>
          <Link className='navbar-brand' to='/'>
            Edume
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <NavLink className='nav-link' to='/'>Home</NavLink>
              <NavLink className='nav-link' to='/reviewtwo'>Review</NavLink>
              <NavLink className='nav-link' to='/dashboard'>Dashboard</NavLink>
              <NavLink className='nav-link' to='/blog'>Blog</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
