import React from 'react';
import logo from './logo.png'; 
import './About.css';

function Head() {
  return (
    <header className="header">
    <div className="left-section">
      <img src={logo} alt="Logo" />
    </div>
    <div className="right-section">
      <div className="nav-links">
        <a href="/Home">HOME</a>
        <a href="/Login">LOGIN</a>
      </div>
    </div>
    </header>

  );
}
export default Head;
