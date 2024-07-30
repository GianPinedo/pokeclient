import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-title">PokeBar</Link>
      <div className="nav-links">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
