import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.png';

const Nav = () => (
  <nav>
    <Link to="/home"><img alt="logo" src={logo}/></Link>
    <Link to="/discover">Découvrir</Link>
    <Link to="/movie">Films</Link>
    <Link to="/tv">Télévision</Link>
    <Link to="/person">Artistes</Link>
  </nav>
)

export default Nav;
