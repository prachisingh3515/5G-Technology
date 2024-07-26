import React from 'react';

const NotificationItem = ({ notification, onClick }) => (
  <div 
    className={`notification-item ${notification.read ? 'read' : 'unread'}`} 
    onClick={() => onClick(notification.id)}
    data-aos='fade-right' data-aos-delay='300'
  >
    <p>{notification.message}</p>
    <small>{new Date(notification.createdAt).toLocaleString()}</small>
  </div>
);

export default NotificationItem;
