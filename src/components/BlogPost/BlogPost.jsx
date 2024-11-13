// src/components/BlogPost/BlogPost.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LikeButton from '../LikeButton/LikeButton';
import CommentSection from '../CommentSection/CommentSection';
import { calculateReadTime } from '../../utils/readTime';
import ReadMore from '../ReadMore/ReadMore'; // Importing the new ReadMore component
import './BlogPost.module.css';

const BlogPost = ({ id, title, content, author, date }) => {
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    setReadTime(calculateReadTime(content));
  }, [content]);

  return (
    <article className="blog-post">
      <div className="blog-post__header">
        <h2 className="blog-post__title">{title}</h2>
        <div className="blog-post__meta">
          <span className="blog-post__author">By {author}</span>
          <time className="blog-post__date">{new Date(date).toLocaleDateString()}</time>
          <span className="blog-post__read-time">{readTime} min read</span>
        </div>
      </div>

      <div className="blog-post__content">
        <ReadMore content={content} /> {/* Using ReadMore component */}
      </div>

      <LikeButton initialLikes={0} />
      <CommentSection postId={id} />
    </article>
  );
};

BlogPost.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default BlogPost;
