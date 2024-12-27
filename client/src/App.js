import React, { useState } from 'react';
import BlogForm from './components/BlogForm';  // Correct import
import BlogList from './components/BlogList';  // Correct import

const App = () => {
  const [posts, setPosts] = useState([]);

  const handleCreateOrUpdatePost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div>
      <h1>Travel Blog</h1>
      <BlogForm onSubmit={handleCreateOrUpdatePost} />
      <BlogList posts={posts} />
    </div>
  );
};

export default App;
