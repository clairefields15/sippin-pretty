import React from 'react';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Sippin' Pretty</h1>
      <Nav />
      <Search />
    </header>
  );
};

export default Header;
