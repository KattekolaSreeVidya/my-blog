import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/posts', label: 'Blog' },
    { path: '/posts/new', label: 'New Post' },
    { path: '/profile', label: 'Profile' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navigation">
      <div className="navigation__brand">
        MyBlog
      </div>

      <button 
        className="navigation__toggle"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
      >
        <span className="navigation__toggle-icon">☰</span>
      </button>

      <ul className={`navigation__menu ${isMenuOpen ? 'is-open' : ''}`}>
        {navItems.map(item => (
          <li key={item.path} className="navigation__item">
            <NavLink
              to={item.path}
              className={({ isActive }) => 
                `navigation__link ${isActive ? 'is-active' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
