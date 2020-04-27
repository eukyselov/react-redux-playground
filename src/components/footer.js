import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <header className="footer">
      <div className="menu">
        <nav className="navbar mr-auto navbar-expand-sm navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/careers">Careers</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Footer;
