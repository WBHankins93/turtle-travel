import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import { Box } from '@mui/material';
import axios from 'axios';

const BlogList = ({ posts }) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // Fetch posts from backend
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/posts');
        setPostList(response.data);
      } catch (error){
        console.log('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [posts]);

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={3}  // Adds spacing between posts
    >
      {postList.map((post) => (
        <Box key={post.id} width={{ xs: '100%', sm: '48%', md: '30%' }}>
          <BlogPost post={post} />
        </Box>
      ))}
    </Box>
  );
};

export default BlogList;
