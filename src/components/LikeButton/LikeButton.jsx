import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './LikeButton.module.css';

function LikeButton({ initialLikes, onLikeChange }) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  // Persist likes to localStorage
  useEffect(() => {
    const savedLikes = localStorage.getItem(`post-likes`);
    if (savedLikes) {
      setLikes(parseInt(savedLikes));
    }
  }, []);

  const handleLikeClick = () => {
    setIsLiked(prevIsLiked => {
      const newIsLiked = !prevIsLiked;
      setLikes(prevLikes => {
        const newLikes = prevIsLiked ? prevLikes - 1 : prevLikes + 1;
        onLikeChange?.(newLikes);
        localStorage.setItem('post-likes', newLikes); // Save to localStorage
        return newLikes;
      });
      return newIsLiked;
    });
  };

  return (
    <button 
      className={`like-button ${isLiked ? 'like-button--liked' : ''}`}
      onClick={handleLikeClick}
      aria-label={isLiked ? 'Unlike post' : 'Like post'}
    >
      <span className="like-button__icon">
        {isLiked ? '❤️' : '🤍'}
      </span>
      <span className="like-button__count">{likes}</span>
    </button>
  );
}

LikeButton.propTypes = {
  initialLikes: PropTypes.number.isRequired,
  onLikeChange: PropTypes.func
};

export default LikeButton;
