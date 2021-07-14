import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
    </nav>
  );
};

export default Nav;
