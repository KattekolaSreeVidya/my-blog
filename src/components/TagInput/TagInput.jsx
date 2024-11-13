import React from 'react';

function TagInput({ tags, onChange }) {
  const handleTagChange = (e) => {
    const newTag = e.target.value;
    if (e.key === 'Enter' && newTag.trim()) {
      const updatedTags = [...tags, newTag.trim()];
      onChange(updatedTags);
    }
  };

  const handleRemoveTag = (tag) => {
    const updatedTags = tags.filter(t => t !== tag);
    onChange(updatedTags);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Press Enter to add tag"
        onKeyDown={handleTagChange}
      />
      <div>
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag} <button onClick={() => handleRemoveTag(tag)}>x</button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagInput;
