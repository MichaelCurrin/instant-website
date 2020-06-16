import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link class="navbar-item" to="/">Instant Website</Link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link class="navbar-item" to='/home'>Home</Link>
          <Link class="navbar-item" to='/custom' >Custom</Link>
          <Link class="navbar-item" to='/showcase' >Showcase</Link>
          <Link class="navbar-item" to='/about' >About</Link>
          <Link class="navbar-item" to='/terms' >Terms</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;