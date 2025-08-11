import axios from '../../../Shared/api/axios';

export const fetchPartnerConnections = (params) => axios.get('/api/partner-connection/', { params });
export const createPartnerConnection = (data) => axios.post('/api/partner-connection/', data);
export const updatePartnerConnection = (id, data) => axios.patch(`/api/partner-connection/${id}`, data);
