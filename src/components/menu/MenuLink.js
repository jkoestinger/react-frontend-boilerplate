import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function MenuLink({ children, to, exact }) {
  return (
    <NavLink exact={exact} className="nav-link" to={to}>{children}</NavLink>
  )
}

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool
}

MenuLink.defaultProps = {
  exact: false
}

export default MenuLink
