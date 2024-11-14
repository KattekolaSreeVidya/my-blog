import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BlogList from './components/BlogList/BlogList';
import { posts as initialPosts } from './data/posts';
import PostEditor from './components/PostEditor/PostEditor';
import './App.css';

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode); // Set dark mode based on saved preference
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle('dark-mode', newMode); // Toggle dark mode on body
    localStorage.setItem('darkMode', newMode); // Save dark mode preference in localStorage
  };

  const handleAddPost = (newPost) => {
    const updatedPosts = [
      ...posts,
      {
        ...newPost,
        id: posts.length + 1,
        date: new Date().toLocaleDateString(),
        author: "Author Name",
        category: "Uncategorized", // Default category
        tags: newPost.tags || [],  // Default empty tags
        readTime: Math.ceil(newPost.content.length / 200),
        likes: 0,
        comments: [],
      },
    ];
    setPosts(updatedPosts);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <Router>
        <Header toggleDarkMode={toggleDarkMode} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<BlogList posts={posts} />} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/create-post" element={<PostEditor onSubmit={handleAddPost} />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
