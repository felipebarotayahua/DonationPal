import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <ul>
          <li>
             <a href="/Home">Home</a> 
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;