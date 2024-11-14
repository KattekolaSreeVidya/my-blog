import { useState } from 'react';
import Header from './components/Header';
import BlogList from './components/BlogList/BlogList';
import { posts as initialPosts } from './data/posts';
import PostEditor from './components/PostEditor/PostEditor';
import './App.css';

function App() {
  const [posts, setPosts] = useState(initialPosts);

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
    <div className="app">
      <Header />
      <main className="main-content">
        <PostEditor onSubmit={handleAddPost} />
        <BlogList posts={posts} />
      </main>
    </div>
  );
}

export default App;
