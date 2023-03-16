import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function MyNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">BooXo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">Books</NavLink>
            <NavLink className="nav-link" to="/add">Add Book</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
