import React from 'react';

const roleColors = {
  admin: 'bg-blue-100 text-blue-800',
  manager: 'bg-green-100 text-green-800',
  staff: 'bg-gray-100 text-gray-800',
  platform_admin: 'bg-purple-100 text-purple-800',
};

export default function UserRoleBadge({ role }) {
  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${roleColors[role] || 'bg-gray-100 text-gray-800'}`}>{role.replace('_', ' ')}</span>
  );
}
