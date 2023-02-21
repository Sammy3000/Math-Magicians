import React from 'react';
import { Link } from 'react-router-dom';
import './Component.css';

function Nav() {
  return (
    <nav>
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </div>
    </nav>
  );
}

export default Nav;
