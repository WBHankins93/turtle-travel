import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BlogPost = ({ post }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body1">
          {post.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
