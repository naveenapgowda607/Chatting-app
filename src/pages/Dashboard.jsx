import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import ChatWindow from './Chat/ChatWindow';
import UserList from './Chat/UserList';
import UserProfile from '../components/UserProfile';
import { updateUserActivity, updateUserStatus } from '../services/userService';
import './dashboard.css';

function Dashboard() {
  const { user, logout } = useAuth();
  const [selectedUser, setSelectedUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (user) {
      updateUserStatus(user.uid, 'online');
      updateUserActivity(user.uid);

      const interval = setInterval(() => {
        updateUserActivity(user.uid);
      }, 30000);

      const handleBeforeUnload = () => {
        updateUserStatus(user.uid, 'offline');
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        clearInterval(interval);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [user]);

  const handleLogout = async () => {
    if (user) {
      await updateUserStatus(user.uid, 'offline');
    }
    logout();
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Chat App</h2>
          <div className="header-actions">
            <button
              className="icon-btn"
              onClick={() => setShowProfile(!showProfile)}
              title="Profile"
            >
              👤
            </button>
            <button
              className="icon-btn"
              onClick={handleLogout}
              title="Logout"
            >
              🚪
            </button>
          </div>
        </div>

        {showProfile && user && (
          <UserProfile user={user} onClose={() => setShowProfile(false)} />
        )}

        <UserList onSelectUser={setSelectedUser} selectedUser={selectedUser} />
      </div>

      <div className="chat-area">
        {selectedUser ? (
          <ChatWindow user={selectedUser} currentUser={user} />
        ) : (
          <div className="no-chat-selected">
            <div className="empty-state">
              <h3>Welcome to Chat App</h3>
              <p>Select a user to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;