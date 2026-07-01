import { useEffect, useRef } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './chat.css';

function MessageList({ messages, currentUserId, loading }) {
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (loading) {
    return (
      <div className="message-list loading">
        <div className="loading-spinner">Loading messages...</div>
      </div>
    );
  }

  return (
    <div className="message-list">
      {messages.length === 0 ? (
        <div className="no-messages">
          <p>No messages yet. Start the conversation!</p>
        </div>
      ) : (
        messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.senderId === currentUserId ? 'sent' : 'received'}`}
          >
            <div className="message-content">
              <p>{msg.content}</p>
              {msg.edited && <span className="edited-label">(edited)</span>}
            </div>
            <span className="message-time">
              {msg.timestamp && formatDistanceToNow(msg.timestamp, { addSuffix: true })}
            </span>
            {msg.senderId === currentUserId && (
              <span className="read-receipt">
                {msg.read ? '✓✓' : '✓'}
              </span>
            )}
          </div>
        ))
      )}
      <div ref={endOfMessagesRef} />
    </div>
  );
}

export default MessageList;