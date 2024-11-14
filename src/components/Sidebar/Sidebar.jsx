// Sidebar.jsx

import { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    'Technology',
    'Lifestyle',
    'Travel',
    'Food',
    'Programming'
  ];

  const recentPosts = [
    { id: 1, title: 'Getting Started with React' },
    { id: 2, title: 'Understanding React Router' },
    { id: 3, title: 'Mastering CSS Grid' }
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="sidebar__toggle">
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>

      <section className="sidebar__section">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__list">
          {categories.map(category => (
            <li key={category} className="sidebar__item">
              <button className="sidebar__link">
                {category}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="sidebar__section">
        <h3 className="sidebar__title">Recent Posts</h3>
        <ul className="sidebar__list">
          {recentPosts.map(post => (
            <li key={post.id} className="sidebar__item">
              <button className="sidebar__link">
                {post.title}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar;
