import axios from '../../../Shared/api/axios';

export const fetchUsers = () => axios.get('/api/user/');
