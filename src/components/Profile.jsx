import React from 'react';
import '../styles/Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        {/* Profile Image */}
        <div className="profile-image-container">
          <div className="profile-image">
            {/* <span className="initials">MA</span> */}
            <img className="profile-image" src="https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg" width={100} height={100} />
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="profile-info">
          <h1 className="profile-name">Michelle Arnold</h1>
          <p className="profile-title">Sales manager</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;