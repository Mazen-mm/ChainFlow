import axios from '../../../Shared/api/axios';

export const fetchDocuments = () => axios.get('/api/document/');
export const uploadDocument = (formData) => axios.post('/api/document/', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
export const deleteDocument = (id) => axios.delete(`/api/document/${id}`);
