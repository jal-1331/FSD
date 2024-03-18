import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Head.css';

const Head = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="header">
        <nav className="nav">
          <Link to="/" className="nav_logo">Hobbies</Link>
          <input
            type="checkbox"
            id="menu-toggle"
            className="menu-toggle"
            checked={isMenuOpen}
            onChange={handleToggle}
          />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul className={`nav_items ${isMenuOpen ? 'show' : ''}`}>
            <li className="nav_item">
              <Link to="/EventDetails" className="nav_link">Home</Link>
              <Link to="/AboutUs" className="nav_link">About</Link>
              <Link to="ContactUs" className="nav_link">ContactUs</Link>
              <Link to="/Profile" className="nav_link">MyAccount</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Head;
