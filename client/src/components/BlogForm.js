import React, { useState } from 'react';

const BlogForm = ({ onSubmit, initialPost }) => {
    const [title, setTitle] = useState(initialPost?.title || '');
    const [content, setContent] = useState(initialPost?.content || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { title, content };
        onSubmit(newPost);
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">{initialPost ? 'Update Post' : 'Create Post'}</button>
    </form>
  );
};

export default BlogForm;