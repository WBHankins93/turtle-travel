import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import axios from 'axios';
import BlogForm from './BlogForm';

const BlogPost = ({ post, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    onDelete(post.id);
  };

  const handleUpdate = (updatedPost) => {
    onUpdate({ ...updatedPost, id: post.id });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <BlogForm 
        onSubmit={handleUpdate} 
        initialPost={post} 
        isEditing={true}  
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body1">
          {post.content}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <Button 
            variant="outlined" 
            color="primary" 
            size="small"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
          <Button 
            variant="outlined" 
            color="error" 
            size="small"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
