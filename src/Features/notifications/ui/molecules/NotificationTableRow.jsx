import React from 'react';
import NotificationPriorityBadge from '../atoms/NotificationPriorityBadge';

export default function NotificationTableRow({ notification, onMarkRead, onDelete }) {
  return (
    <tr className={`border-b ${notification.isRead ? '' : 'bg-yellow-50'}`}>
      <td className="px-4 py-2 font-medium">{notification.title}</td>
      <td className="px-4 py-2">{notification.message}</td>
      <td className="px-4 py-2"><NotificationPriorityBadge priority={notification.priority} /></td>
      <td className="px-4 py-2">{new Date(notification.createdAt).toLocaleString()}</td>
      <td className="px-4 py-2 flex gap-2">
        {!notification.isRead && (
          <button className="text-blue-600 hover:underline" onClick={() => onMarkRead(notification._id)}>Mark Read</button>
        )}
        <button className="text-red-600 hover:underline" onClick={() => onDelete(notification._id)}>Delete</button>
      </td>
    </tr>
  );
}
