import React from 'react';
import logo from './logo.png'; 
import './SA.css';

function Header() {
  return (
    <header className="header">
    <div className="left-section">
      <img src={logo} alt="Logo" />
    </div>
    <div className="right-section">
      <div className="nav-links">
        <a href="/user">USER</a>
        <a href="/contact">CONTACT</a>
        <a href="/logout">LOGOUT</a>
      </div>
    </div>
    </header>

  );
}
export default Header;
