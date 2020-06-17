import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">Instant Website</Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to='/home'>Home</Link>
          <Link className="navbar-item" to='/custom?edit=0' >Custom</Link>
          <Link className="navbar-item" to='/showcase' >Showcase</Link>
          <Link className="navbar-item" to='/about' >About</Link>
          <Link className="navbar-item" to='/terms' >Terms</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;