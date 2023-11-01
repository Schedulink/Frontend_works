import React from 'react';
import logo from './logo.png'; 
import './Homepage.css';

function header() {
  return (
    <header className="header">
    <div className="left-section">
      <img src={logo} alt="Logo" />
    </div>
    <div className="right-section">
      <div className="nav-links">
        <a href="/LOGIN">LOGIN</a>
        <a href="/ABOUT US">ABOUT US</a>
      </div>
    </div>
    </header>

  );
}
export default header;
