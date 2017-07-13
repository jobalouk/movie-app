import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="nav">
    <Link to="/discover">Découvrir</Link>
    <Link to="/movie">Films</Link>
    <Link to="/tv">Télévision</Link>
    <Link to="/person">Artistes</Link>
  </nav>
)

export default Nav;
