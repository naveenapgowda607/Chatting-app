import { useAuth } from '../hooks/useAuth';
import './components.css';

function UserProfile({ user, onClose }) {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    onClose();
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h3>Profile</h3>
      </div>
      
      <div className="profile-content">
        <img src={user.photoURL} alt={user.displayName} className="profile-avatar" />
        <h4>{user.displayName}</h4>
        <p className="profile-email">{user.email}</p>
        
        <div className="profile-actions">
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;