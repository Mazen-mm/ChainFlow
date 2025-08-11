import axios from '../../../Shared/api/axios';

export const fetchProducts = (params) => axios.get('/product/', { params });
export const fetchProductById = (id) => axios.get(`/product/${id}`);
export const createProduct = (data) => axios.post('/product/', data);
export const updateProduct = (id, data) => axios.patch(`/product/${id}`, data);
export const deleteProduct = (id) => axios.delete(`/product/${id}`);
