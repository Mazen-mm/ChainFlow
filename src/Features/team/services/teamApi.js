import axios from '../../../Shared/api/axios';

export const inviteTeamMember = (data) => axios.post('/api/team/invite', data);
export const verifyTeamInvite = (data) => axios.post('/api/team/verify-invite', data);
