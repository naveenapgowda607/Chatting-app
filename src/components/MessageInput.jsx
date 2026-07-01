import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { sendMessage, getOrCreateChatRoom } from '../services/messageService';
import { encryptMessage, decryptMessage } from '../utils/encryption';
import './components.css';

function MessageInput({ recipientId, recipientPublicKey }) {
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const { user } = useAuth();

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    setSending(true);

    try {
      const chatRoomId = await getOrCreateChatRoom(user.uid, recipientId);
      
      await sendMessage(chatRoomId, user.uid, recipientId, message, false);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSendMessage} className="message-input-form">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="message-input"
        disabled={sending}
      />
      <button
        type="submit"
        className="send-btn"
        disabled={sending || !message.trim()}
      >
        {sending ? '...' : '📤'}
      </button>
    </form>
  );
}

export default MessageInput;