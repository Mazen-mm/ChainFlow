import React from 'react';
import UserTableRow from '../molecules/UserTableRow';

export default function UserTable({ users }) {
  return (
    <div className="overflow-x-auto rounded shadow bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserTableRow
              key={user._id}
              user={user}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
