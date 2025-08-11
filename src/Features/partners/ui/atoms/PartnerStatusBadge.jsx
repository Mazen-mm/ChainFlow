import React from 'react';

const statusColors = {
  Pending: 'bg-yellow-100 text-yellow-800',
  Active: 'bg-green-100 text-green-800',
  Rejected: 'bg-red-100 text-red-800',
  Cancelled: 'bg-gray-200 text-gray-600',
  Inactive: 'bg-gray-100 text-gray-800',
  Completed: 'bg-blue-100 text-blue-800',
  Expired: 'bg-gray-300 text-gray-700',
  Terminated: 'bg-red-200 text-red-900',
};

export default function PartnerStatusBadge({ status }) {
  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>{status}</span>
  );
}
