import React, { useState, useEffect } from 'react';
import NotificationItem from './NotificationItem';

const NotificationInbox = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
    setNotifications(storedNotifications);

    // Simulate real-time updates
    const interval = setInterval(() => {
      addNotification('You have a new real-time notification!');
    }, 10000); // Add a new notification every 10 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const addNotification = (message) => {
    const newNotification = {
      id: Date.now(),
      message,
      type: 'info',
      read: false,
      createdAt: new Date()
    };
    setNotifications(prevNotifications => {
      const updatedNotifications = [newNotification, ...prevNotifications];
      localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
      return updatedNotifications;
    });
  };

  const markAsRead = (id) => {
    setNotifications(prevNotifications => {
      const updatedNotifications = prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      );
      localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
      return updatedNotifications;
    });
  };

  return (
    <center className='py-14'>
    <div className="notification-inbox" data-aos='fade-up' data-aos-delay='300'>
      <h2>Notifications</h2>
      {notifications.map(notification => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onClick={markAsRead}
        />
      ))}
    </div>
    </center>
  );
};

export default NotificationInbox;
