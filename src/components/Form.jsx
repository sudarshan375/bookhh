import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Form() {
    const [replyText, setReplyText] = useState('');
    const [replies, setReplies] = useState([]);
    
    const handleReplyChange = (event) => {
      setReplyText(event.target.value);
    };
  
    const handleReplySubmit = () => {
      if (replyText.trim() !== '') {
        const newReplies = [...replies, replyText];
        setReplies(newReplies);
        setReplyText('');
      }
    };
  return (
       <div>
      <div className="d-flex reply-comment">
        <a href="#text-comment1" className="reply-anchor" data-bs-toggle="collapse">
          <i className="far fa-comment-dots"></i>
          <span className="reply-btn">Reply</span>
        </a>
        <span className="reply-count">{replies.length}</span>
      </div>
      <div id="text-comment1" className="collapse">
        <textarea
          placeholder="Reply to this contribution"
          value={replyText}
          onChange={handleReplyChange}
        />
        <div className="d-flex align-content-center justify-content-end gap-2">
          <button className="cancel-reply-btn">Cancel</button>
          <button className="reply-comment-btn" onClick={handleReplySubmit}>Reply</button>
        </div>
      </div>
      {replies.length > 0 && (
        <div className="replies-container">
          <h4>Replies:</h4>
          {replies.map((reply, index) => (
            <div key={index} className="reply-item">{reply}</div>
          ))}
        </div>
      )}
    </div>

  );
}

export default Form;
