import axios from '../../../Shared/api/axios';

export const fulfillOrderInventory = (orderId) => axios.post(`/inventory/fulfill/${orderId}`);
export const fetchInventory = (params) => axios.get('/inventory/', { params });
export const fetchInventoryById = (id) => axios.get(`/inventory/${id}`);
export const createInventory = (data) => axios.post('/inventory/', data);
export const updateInventory = (id, data) => axios.patch(`/inventory/${id}`, data);
export const deleteInventory = (id) => axios.delete(`/inventory/${id}`);
