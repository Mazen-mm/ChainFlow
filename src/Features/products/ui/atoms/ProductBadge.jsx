import React from 'react';

const statusColors = {
  true: 'bg-green-100 text-green-800',
  false: 'bg-red-100 text-red-800',
};

export default function ProductBadge({ isActive }) {
  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColors[isActive]}`}>{isActive ? 'Active' : 'Inactive'}</span>
  );
}
