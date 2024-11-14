// components/CreatePostPage.jsx
import React from 'react';
import PostEditor from './PostEditor';

const CreatePostPage = ({ onSubmit }) => {
  return (
    <div>
      <h2>Create a New Post</h2>
      <PostEditor onSubmit={onSubmit} />
    </div>
  );
};

export default CreatePostPage;
