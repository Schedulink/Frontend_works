import React from 'react';
import './Homepage.css';
import Head from './Head';

const Homepage = () => {
  return (
    <div>
      <Head />
      <div className="home-container">
        <div className="animation">
          <div className="schedulink">ScheduLink</div>
          <a href="/get-started" className="get-started-button">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
