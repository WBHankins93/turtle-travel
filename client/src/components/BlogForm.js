import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const BlogForm = ({ onSubmit, initialPost }) => {
    const [title, setTitle] = useState(initialPost?.title || '');
    const [content, setContent] = useState(initialPost?.content || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, content };
        
        try {
          const response = await axios.post('http://localhost:5000/api/posts', newPost);
          onSubmit(newPost);
          setTitle('');
          setContent('');
        } catch (error) {
          console.log('Error creating post:', error);
        }
    };

    return (
    <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          {initialPost ? 'Edit Post' : 'Create New Post'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            label="Content"
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            multiline
            rows={4}
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            {initialPost ? 'Update Post' : 'Create Post'}
          </Button>
        </form>
      </Container>
  );
};

export default BlogForm;