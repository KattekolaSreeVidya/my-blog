import React from 'react';
import { Link } from 'react-router-dom';
import './Header.modules.css';

function Header({ toggleDarkMode }) {
  return (
    <header className="blog-header">
      <h1>My Awesome Blog</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/create-post">Create Post</Link></li>
        </ul>
      </nav>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        Toggle Dark Mode
      </button>
    </header>
  );
}

export default Header;
