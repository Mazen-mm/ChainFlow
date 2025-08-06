import React from 'react';
import NotificationCard from './NotificationCard';

const NotificationList = ({ notifications }) => {
  return (
    <div className="row gap-2">
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationList;
