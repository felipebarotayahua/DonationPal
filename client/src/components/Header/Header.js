import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <ul>
          <li>
             <a href="/api/v1/campaigns">Home</a> 
          </li>
          <li>
          <a href="/login">Profile</a>
          </li>
          <li>
          <a href="/logout">Logout</a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;