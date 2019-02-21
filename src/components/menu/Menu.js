import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import MenuLink from './MenuLink';

function Menu({ user, onLogout }) {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#">Application name</Navbar.Brand>
      <Nav className="mr-auto">
        <MenuLink exact to="/">Home</MenuLink>
        { user && <MenuLink to="/private">Private</MenuLink>}
      </Nav>
      <Nav>
        { !user && <MenuLink to="/login">Login</MenuLink>}
        { user && <Nav.Link href="#" onClick={onLogout}>Logout</Nav.Link>}
      </Nav>
    </Navbar>
  )
}

export default Menu
