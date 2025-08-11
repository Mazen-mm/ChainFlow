import React from 'react';

const statusColors = {
  active: 'bg-green-100 text-green-800',
  invited: 'bg-yellow-100 text-yellow-800',
};

export default function UserStatusBadge({ status }) {
  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
  );
}
