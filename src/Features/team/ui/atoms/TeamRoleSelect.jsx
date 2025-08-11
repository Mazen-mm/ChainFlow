import React from 'react';

const roles = [
  { value: 'admin', label: 'Admin' },
  { value: 'manager', label: 'Manager' },
  { value: 'staff', label: 'Staff' },
];

export default function TeamRoleSelect({ value, onChange }) {
  return (
    <select
      className="border rounded px-2 py-1"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      {roles.map(role => (
        <option key={role.value} value={role.value}>{role.label}</option>
      ))}
    </select>
  );
}
