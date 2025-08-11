import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNotifications,
  markAllRead,
  deleteAllNotifications,
  markNotificationRead,
  deleteNotification,
} from '../slice';
import NotificationTable from '../ui/organisms/NotificationTable';

export default function NotificationsListPage() {
  const dispatch = useDispatch();
  const { notifications, loading, error } = useSelector((state) => state.notifications);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  const handleMarkRead = (id) => {
    dispatch(markNotificationRead(id));
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this notification?')) {
      dispatch(deleteNotification(id));
    }
  };

  const handleMarkAllRead = () => {
    dispatch(markAllRead());
  };

  const handleDeleteAll = () => {
    if (window.confirm('Delete all notifications?')) {
      dispatch(deleteAllNotifications());
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={handleMarkAllRead}>Mark All Read</button>
          <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={handleDeleteAll}>Delete All</button>
        </div>
      </div>
      <NotificationTable notifications={notifications} onMarkRead={handleMarkRead} onDelete={handleDelete} />
    </div>
  );
}
