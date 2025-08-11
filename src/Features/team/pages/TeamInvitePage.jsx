import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inviteTeamMember } from '../slice';
import TeamInviteForm from '../ui/organisms/TeamInviteForm';

export default function TeamInvitePage() {
  const dispatch = useDispatch();
  const { loading, inviteStatus, error } = useSelector(state => state.team);

  const handleInvite = (data) => {
    dispatch(inviteTeamMember(data));
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Invite Team Member</h1>
      <TeamInviteForm onSubmit={handleInvite} loading={loading} />
      {inviteStatus && <div className="mt-4 text-green-700">{inviteStatus}</div>}
      {error && <div className="mt-4 text-red-600">{error}</div>}
    </div>
  );
}
