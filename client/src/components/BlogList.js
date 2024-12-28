import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import { Box } from '@mui/material';

const BlogList = ({ posts, onDelete, onUpdate }) => {
  
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={3}  // Adds spacing between posts
    >
      {posts.map((post) => (
        <Box key={post.id} width={{ xs: '100%', sm: '48%', md: '30%' }}>
          <BlogPost 
            post={post}
            onDelete={onDelete}
            onUpdate={onUpdate} 
          />
        </Box>
      ))}
    </Box>
  );
};

export default BlogList;
