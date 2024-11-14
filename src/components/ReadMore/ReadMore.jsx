// src/components/ReadMore/ReadMore.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import './ReadMore.module.css';

const ReadMore = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(prev => !prev);
  };

  const displayContent = isExpanded
    ? content
    : content.slice(0, 200) + (content.length > 200 ? '...' : '');

  return (
    <div className="read-more">
      <p>{displayContent}</p>
      <button className="read-more__toggle" onClick={toggleContent}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

ReadMore.propTypes = {
  content: PropTypes.string.isRequired
};

export default ReadMore;
