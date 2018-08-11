import React from 'react';
import './Navbar.scss';

const Navbar = (props) => (
  <nav className="navbar">
    <div className="logo" />
    <div className="links">
      {props.children}
    </div>
  </nav>
)

export default Navbar;
