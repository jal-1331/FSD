import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Head.css';

const Head = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          
          <Link to="/" className="nav_logo">Hobbies</Link>  {/* Replace "a" with "Link" */}
          <ul className="nav_items">
            <li className="nav_item">
              <Link to="/EventDetails" className="nav_link">Home</Link>  {/* Replace "a" with "Link" */}
              <Link to="#" className="nav_link">About</Link>  {/* Add correct route */}
              <Link to="#" className="nav_link">Contact</Link>  {/* Add correct route */}
              <Link to="/Profile" className="nav_link">MyAccount</Link>  {/* Add correct route */}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Head;
