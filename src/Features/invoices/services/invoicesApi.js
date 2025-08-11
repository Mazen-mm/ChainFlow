import axios from '../../../Shared/api/axios';

export const fetchInvoices = () => axios.get('/api/invoice/');
export const fetchInvoiceById = (id) => axios.get(`/api/invoice/${id}`);
export const downloadInvoice = (id) => axios.get(`/api/invoice/download/${id}`, { responseType: 'blob' });
