import React from 'react';
import TeamRoleSelect from '../atoms/TeamRoleSelect';

export default function TeamInviteFormRow({ email, setEmail, role, setRole, message, setMessage }) {
  return (
    <div className="flex gap-2 items-center mb-2">
      <input
        className="border rounded px-2 py-1 flex-1"
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TeamRoleSelect value={role} onChange={setRole} />
      <input
        className="border rounded px-2 py-1 flex-1"
        type="text"
        placeholder="Message (optional)"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
    </div>
  );
}
