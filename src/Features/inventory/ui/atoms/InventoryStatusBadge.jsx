import React from 'react';

const statusColors = {
  'In Stock': 'bg-green-100 text-green-800',
  'Low Stock': 'bg-yellow-100 text-yellow-800',
  'Out of Stock': 'bg-red-100 text-red-800',
  'Discontinued': 'bg-gray-200 text-gray-600',
};

export default function InventoryStatusBadge({ status }) {
  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>{status}</span>
  );
}
