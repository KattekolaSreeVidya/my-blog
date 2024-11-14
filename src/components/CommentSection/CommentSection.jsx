import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CommentSection.module.css';

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  // Load comments from localStorage
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(`comments-${postId}`)) || [];
    setComments(savedComments);
  }, [postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newCommentObj = {
      id: Date.now(),
      text: newComment,
      timestamp: new Date().toISOString(),
      replies: []
    };

    const updatedComments = [...comments, newCommentObj];
    setComments(updatedComments);
    localStorage.setItem(`comments-${postId}`, JSON.stringify(updatedComments));
    setNewComment('');
  };

  const handleEditComment = (id, newText) => {
    const updatedComments = comments.map(comment =>
      comment.id === id ? { ...comment, text: newText } : comment
    );
    setComments(updatedComments);
    localStorage.setItem(`comments-${postId}`, JSON.stringify(updatedComments));
  };

  const handleAddReply = (commentId, replyText) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        comment.replies.push({
          id: Date.now(),
          text: replyText,
          timestamp: new Date().toISOString()
        });
      }
      return comment;
    });
    setComments(updatedComments);
    localStorage.setItem(`comments-${postId}`, JSON.stringify(updatedComments));
  };

  return (
    <div className="comment-section">
      <button 
        className="comment-section__toggle"
        onClick={() => setIsExpanded(prev => !prev)}
      >
        {isExpanded ? 'Hide' : 'Show'} Comments ({comments.length})
      </button>

      {isExpanded && (
        <>
          <form onSubmit={handleSubmit} className="comment-form">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="comment-form__input"
              rows="3"
            />
            <button 
              type="submit" 
              disabled={!newComment.trim()}
              className="comment-form__submit"
            >
              Post Comment
            </button>
          </form>

          <div className="comments-list">
            {comments.map(comment => (
              <div key={comment.id} className="comment">
                <p className="comment__text">
                  {comment.text}
                  <button onClick={() => handleEditComment(comment.id, prompt('Edit your comment:', comment.text))}>Edit</button>
                </p>
                <span className="comment__timestamp">
                  {new Date(comment.timestamp).toLocaleString()}
                </span>

                <div className="comment-replies">
                  {comment.replies.map(reply => (
                    <div key={reply.id} className="comment-reply">
                      <p>{reply.text}</p>
                      <span>{new Date(reply.timestamp).toLocaleString()}</span>
                    </div>
                  ))}
                  <button onClick={() => {
                    const replyText = prompt('Write a reply:');
                    if (replyText) handleAddReply(comment.id, replyText);
                  }}>Reply</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

CommentSection.propTypes = {
  postId: PropTypes.number.isRequired
};

export default CommentSection;
