import React from 'react';
import BlogPost from './BlogPost';
import { Box } from '@mui/material';

const BlogList = ({ posts }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={3}  // Adds spacing between posts
    >
      {posts.map((post, index) => (
        <Box key={index} width={{ xs: '100%', sm: '48%', md: '30%' }}>
          <BlogPost post={post} />
        </Box>
      ))}
    </Box>
  );
};

export default BlogList;
