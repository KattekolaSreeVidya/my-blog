import React, { useState } from 'react';

function RichTextEditor({ value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <textarea
      value={value}
      onChange={handleChange}
      rows="10"
      cols="50"
      placeholder="Write your content here..."
    />
  );
}

export default RichTextEditor;
