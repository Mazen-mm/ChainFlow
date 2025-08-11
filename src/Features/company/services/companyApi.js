import axios from '../../../Shared/api/axios';

export const fetchCompanies = (params) => axios.get('/api/company/', { params });
export const fetchCompanyById = (id) => axios.get(`/api/company/${id}`);
export const approveCompany = (companyId, data) => axios.patch(`/api/company/approve/${companyId}`, data);
