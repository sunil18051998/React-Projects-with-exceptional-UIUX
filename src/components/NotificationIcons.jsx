import React from 'react';
import { FaEnvelope, FaBell } from 'react-icons/fa';
import '../styles/NotificationIcons.css';

const NotificationIcons = () => {
  const hasNewMessages = true;
  const hasNewNotifications = true;
  const messageCount = 3;
  const notificationCount = 12;

  return (
    <div className="notification-container">
      {/* Email Icon with Badge */}
      <div className="icon-wrapper">
        <FaEnvelope className="icon" size={20} />
        {hasNewMessages && (
          <span className="badge badge-count">{messageCount}</span>
        )}
      </div>

      {/* Bell Icon with Badge */}
      <div className="icon-wrapper">
        <FaBell className="icon" size={20} />
        {hasNewNotifications && (
          <span className="badge badge-dot"></span>
        )}
      </div>
    </div>
  );
};

export default NotificationIcons;