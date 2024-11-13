import { useState } from 'react';
import './PostEditor.module.css';
import TagInput from '../TagInput/TagInput';
import RichTextEditor from '../RichTextEditor/RichTextEditor';

function PostEditor() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: [],
    category: 'general',
    isPublished: false,
  });

  const [errors, setErrors] = useState({});
  const [isDirty, setIsDirty] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'title':
        return value.trim().length < 5 ? 'Title must be at least 5 characters' : '';
      case 'content':
        return value.trim().length < 10 ? 'Content must be at least 10 characters' : '';
      case 'tags':
        return value.length === 0 ? 'At least one tag is required' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setIsDirty((prev) => ({
      ...prev,
      [name]: true,
    }));

    if (isDirty[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, newValue),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    // If there are no validation errors, proceed with submission
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully:', formData);

      alert(formData.isPublished ? 'Post Published!' : 'Draft Saved!');

      // Reset form and error state after submission
      setFormData({
        title: '',
        content: '',
        tags: [],
        category: 'general',
        isPublished: false,
      });
      setErrors({});
      setIsDirty({});
    } else {
      console.log('Form submission prevented due to errors:', newErrors);
    }
  };

  const isFormValid = () => {
    // Check if all fields are valid by confirming errors object is empty
    return Object.values(errors).every((error) => error === '');
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
          onBlur={handleBlur}
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="content">Content *</label>
        <RichTextEditor
          value={formData.content}
          onChange={(content) => handleChange({ target: { name: 'content', value: content } })}
          onBlur={() => handleBlur({ target: { name: 'content', value: formData.content } })}
          error={errors.content}
        />
        {errors.content && <span className="error-message">{errors.content}</span>}
      </div>

      <TagInput
        tags={formData.tags}
        onChange={(tags) => handleChange({ target: { name: 'tags', value: tags } })}
        onBlur={() => handleBlur({ target: { name: 'tags', value: formData.tags } })}
        error={errors.tags}
      />

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

      <button
        type="submit"
        className="submit-button"
        disabled={!isFormValid()}
      >
        {formData.isPublished ? 'Publish Post' : 'Save Draft'}
      </button>
    </form>
  );
}

export default PostEditor;
