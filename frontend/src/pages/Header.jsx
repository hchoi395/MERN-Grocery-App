import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="header-components">
          <li className="header-home">
            <Link to="/">Home</Link>
          </li>
          <li className="header-list">
            <Link to="/list">List</Link>
          </li>
        </ul>
      </nav>
      <div className="line"></div>
    </header>
  )
}

export default Header;