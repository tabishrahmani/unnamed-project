import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

const NavbarComponent = () => {
  return (
    <Navbar color="dark" dark expand="md" fixed="top" light>
      <NavbarBrand href="/">Unnamed</NavbarBrand>
      <Collapse navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="/signup">Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signin">Signin</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavbarComponent
