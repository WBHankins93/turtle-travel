import React, { useState } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import { Container, Typography } from '@mui/material';

const App = () => {
  const [posts, setPosts] = useState([]);

  const handleCreateOrUpdatePost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        Travel Blog
      </Typography>
      <BlogForm onSubmit={handleCreateOrUpdatePost} />
      <BlogList posts={posts} />
    </Container>
  );
};

export default App;
