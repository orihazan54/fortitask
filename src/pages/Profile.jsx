import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Profile.css';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <h1>Profile</h1>
        {user ? (
          <div className="profile-details">
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
          </div>
        ) : (
          <p>No user data available. Please log in again.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
