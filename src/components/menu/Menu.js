import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import MenuLink from './MenuLink';
import withAuth from '../../containers/withAuth';
import { withRouter } from 'react-router-dom'


const Menu = withRouter(withAuth(({ auth: { user, logout }, history }) => {
  const logoutUser = () => {
    logout()
    localStorage.removeItem('auth-user')
    localStorage.removeItem('auth-token')
    history.push('/')
  }

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#">Application name</Navbar.Brand>
      <Nav className="mr-auto">
        <MenuLink exact to="/">Home</MenuLink>
        { user && <MenuLink to="/private">Private</MenuLink>}
      </Nav>
      <Nav>
        { !user && <MenuLink to="/login">Login</MenuLink>}
        { user && <Nav.Link href="#" onClick={logoutUser}>Logout</Nav.Link>}
      </Nav>
    </Navbar>
  )
}))

export default Menu
