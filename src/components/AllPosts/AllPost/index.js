import React, { useState } from 'react';

const AllPost = ({ onSubmitComment, onSubmitReply }) => {
  const [commentText, setCommentText] = useState('');
  const [replyText, setReplyText] = useState('');

  const handleSubmitComment = () => {
    // Add logic to submit the comment
    onSubmitComment(commentText);
    setCommentText('');
  };

  const handleSubmitReply = () => {
    // Add logic to submit the reply
    onSubmitReply(replyText);
    setReplyText('');
  };

  return (
    <>
      <div className='allpost-container'>
        <div className='names'>
        <h5 className='name allposts'>All Post</h5>
        <h5 className='name'>Commented Post</h5>
        <h5 className='name'>Replied Post</h5>
        <h5 className='name createpost'><span className='plus'>+</span> Create Post</h5>
        </div>
        <div className='post-details'>
        <h5 className='allpost-heading'>All Post(10)</h5>
        <h5 className='title-post'>The posts title</h5>
          <div className='commets-replys'>
            <p className='comments'>12 Comments</p>
            <p className='reply'>10 Reply</p>
          </div>
          <div className='comments-reply'>
            <h5 className='comments-heading'>Comments</h5>
            <p className='name-comment'>Jimmy: This is the First Comment for this post</p>
            <p className='name-comment'>Dhruv: This is the Second Comment for this post</p>
          </div>
          <div className='comments-reply'>
          </div>
          <div className='comment-input'>
            <textarea
              placeholder='Add a comment...'
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button onClick={handleSubmitComment}>Submit Comment</button>
          </div>
          <div className='comments-reply'>
          </div>
          <div className='comment-input'>
            <textarea
              placeholder='Add a reply...'
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button onClick={handleSubmitReply}>Submit Reply</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPost;

