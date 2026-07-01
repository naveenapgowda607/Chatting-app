import { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from '../../components/MessageInput';
import { getOrCreateChatRoom, subscribeToMessages } from '../../services/messageService';
import { subscribeToUserPresence } from '../../services/userService';
import './chat.css';

function ChatWindow({ user, currentUser }) {
  const [messages, setMessages] = useState([]);
  const [userStatus, setUserStatus] = useState('offline');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeChat = async () => {
      try {
        const chatRoomId = await getOrCreateChatRoom(currentUser.uid, user.id);
        
        const unsubscribeMessages = subscribeToMessages(chatRoomId, (msgs) => {
          setMessages(msgs);
          setLoading(false);
        });

        const unsubscribePresence = subscribeToUserPresence(user.id, (userData) => {
          setUserStatus(userData.status || 'offline');
        });

        return () => {
          unsubscribeMessages();
          unsubscribePresence();
        };
      } catch (error) {
        console.error('Error initializing chat:', error);
        setLoading(false);
      }
    };

    return initializeChat();
  }, [user.id, currentUser.uid]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="header-info">
          <img src={user.photoURL} alt={user.displayName} className="user-avatar" />
          <div>
            <h3>{user.displayName}</h3>
            <p className={`status ${userStatus}`}>
              {userStatus === 'online' ? '🟢 Online' : '⚫ Offline'}
            </p>
          </div>
        </div>
      </div>

      <MessageList messages={messages} currentUserId={currentUser.uid} loading={loading} />

      <MessageInput recipientId={user.id} recipientPublicKey={user.publicKey} />
    </div>
  );
}

export default ChatWindow;