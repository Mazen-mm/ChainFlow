import React from 'react';
import UserRoleBadge from '../atoms/UserRoleBadge';
import UserStatusBadge from '../atoms/UserStatusBadge';

export default function UserTableRow({ user }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2 font-medium">{user.name}</td>
      <td className="px-4 py-2">{user.email}</td>
      <td className="px-4 py-2"><UserRoleBadge role={user.role} /></td>
      <td className="px-4 py-2"><UserStatusBadge status={user.status} /></td>
    </tr>
  );
}
