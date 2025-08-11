import axios from '../../../Shared/api/axios';

// Employees are users with role 'staff'
export const fetchEmployees = () => axios.get('/api/user/');
