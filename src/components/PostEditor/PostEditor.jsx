import { useState } from 'react';
import TagInput from '../TagInput/TagInput';
import RichTextEditor from '../RichTextEditor/RichTextEditor';
import './PostEditor.module.css';

function PostEditor({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: [],
    category: 'general',
    isPublished: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleContentChange = (content) => {
    setFormData((prev) => ({
      ...prev,
      content,
    }));
  };

  const handleTagsChange = (tags) => {
    setFormData((prev) => ({
      ...prev,
      tags,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
      setFormData({
        title: '',
        content: '',
        tags: [],
        category: 'general',
        isPublished: false,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-editor">
      <div className="form-group">
        <label htmlFor="title">Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Content *</label>
        <RichTextEditor value={formData.content} onChange={handleContentChange} />
      </div>

      <TagInput tags={formData.tags} onChange={handleTagsChange} />

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="general">General</option>
          <option value="technology">Technology</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="travel">Travel</option>
        </select>
      </div>

      <div className="form-group checkbox">
        <label>
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleChange}
          />
          Publish immediately
        </label>
      </div>

      <button type="submit" className="submit-button">
        {formData.isPublished ? 'Publish Post' : 'Save Draft'}
      </button>
    </form>
  );
}

export default PostEditor;
