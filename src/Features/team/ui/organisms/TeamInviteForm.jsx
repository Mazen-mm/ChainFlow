import React, { useState } from 'react';
import TeamInviteFormRow from '../molecules/TeamInviteFormRow';

export default function TeamInviteForm({ onSubmit, loading }) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('staff');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ email, role, message });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <TeamInviteFormRow
        email={email}
        setEmail={setEmail}
        role={role}
        setRole={setRole}
        message={message}
        setMessage={setMessage}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
        disabled={loading}
      >
        {loading ? 'Inviting...' : 'Invite'}
      </button>
    </form>
  );
}
