import { useState, useEffect } from 'react';
import { getAllUsers } from '../../services/userService';
import { useAuth } from '../../hooks/useAuth';
import './chat.css';

function UserList({ onSelectUser, selectedUser }) {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const { user: currentUser } = useAuth();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const allUsers = await getAllUsers();
        const filteredUsers = allUsers.filter((u) => u.id !== currentUser.uid);
        setUsers(filteredUsers);
      } catch (error) {
        console.error('Error loading users:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, [currentUser]);

  const filteredUsers = users.filter((user) =>
    user.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-list-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="user-list">
        {loading ? (
          <div className="loading">Loading users...</div>
        ) : filteredUsers.length === 0 ? (
          <div className="no-users">No users found</div>
        ) : (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className={`user-item ${selectedUser?.id === user.id ? 'active' : ''}`}
              onClick={() => onSelectUser(user)}
            >
              <img src={user.photoURL} alt={user.displayName} className="user-avatar-sm" />
              <div className="user-info">
                <h4>{user.displayName}</h4>
                <p className={`user-status ${user.status}`}>
                  {user.status === 'online' ? '🟢 Online' : '⚫ Away'}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserList;