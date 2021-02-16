import React from 'react';
import { NavbarContainer, UserTitle, NavBox, NavLink, NavButton} from './NavbarStyles'
import PersonIcon from '@material-ui/icons/Person';

const Navbar = () => {
  return (
    <NavbarContainer>
      <UserTitle>
        <PersonIcon /> MY RANGI CITY ACCOUNT
      </UserTitle>
      <NavBox>
        <NavLink>New Order</NavLink>
        <NavLink>Work in progress</NavLink>
        <NavLink>Completed work</NavLink>
        <NavLink>Team</NavLink>
        <NavButton>LOGOUT</NavButton>
      </NavBox>
    </NavbarContainer>
  )
}

export default Navbar
