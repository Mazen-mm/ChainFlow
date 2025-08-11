import React from 'react';

const statusColors = {
  Created: 'bg-gray-100 text-gray-800',
  Rejected: 'bg-red-100 text-red-800',
  Submitted: 'bg-blue-100 text-blue-800',
  Accepted: 'bg-green-100 text-green-800',
  Declined: 'bg-red-100 text-red-800',
  Preparing: 'bg-yellow-100 text-yellow-800',
  Ready_to_ship: 'bg-indigo-100 text-indigo-800',
  Shipped: 'bg-purple-100 text-purple-800',
  Delivered: 'bg-green-100 text-green-800',
  Received: 'bg-green-100 text-green-800',
  Completed: 'bg-green-200 text-green-900',
  Cancelled: 'bg-gray-200 text-gray-600',
};

export default function OrderStatusBadge({ status }) {
  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>{status.replace(/_/g, ' ')}</span>
  );
}
