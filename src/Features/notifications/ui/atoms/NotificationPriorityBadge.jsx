import React from 'react';

const priorityColors = {
  Low: 'bg-gray-100 text-gray-800',
  Medium: 'bg-blue-100 text-blue-800',
  High: 'bg-orange-100 text-orange-800',
  Urgent: 'bg-red-100 text-red-800',
};

export default function NotificationPriorityBadge({ priority }) {
  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${priorityColors[priority] || 'bg-gray-100 text-gray-800'}`}>{priority}</span>
  );
}
