import axios from '../../../Shared/api/axios';

export const deleteOrder = (id) => axios.delete(`/order/${id}`);
export const fetchOrders = (params) => axios.get('/order/', { params });
export const fetchOrderById = (id) => axios.get(`/order/${id}`);
export const createOrder = (supplierId, data) => axios.post(`/order/${supplierId}`, data);
export const updateOrder = (id, data) => axios.patch(`/order/${id}`, data);
export const deleteOrderItem = (orderId, itemId) => axios.delete(`/order/${orderId}/remove/${itemId}`);
export const addOrderItem = (orderId, data) => axios.post(`/order/${orderId}/add`, data);
export const editOrderItem = (orderId, itemId, data) => axios.patch(`/order/${orderId}/edit/${itemId}`, data);
