import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './SearchBar';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Recetas de cocina</Navbar.Brand>
      <SearchBar />
    </Navbar>
  );
}

export default Header;
