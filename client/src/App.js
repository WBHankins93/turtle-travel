import React, { useState, useEffect } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import { Container, Typography } from '@mui/material';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  };

  const handleCreatePost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5001/api/posts/${postId}`);
      setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
    } catch (error) {
      console.log('Error deleting post:', error);
    }
  };

  const handleUpdatePost = async (updatedPost) => {
    try {
      setPosts(prevPosts =>
        prevPosts.map(post =>
          post.id === updatedPost.id ? updatedPost : post
        )
      );
    } catch (error) {
      console.log('Error updating post:', error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        Travel Blog
      </Typography>
      <BlogForm onSubmit={handleCreatePost} />
      <BlogList 
        posts={posts}
        onDelete={handleDeletePost}
        onUpdate={handleUpdatePost} 
      />
    </Container>
  );
};

export default App;
