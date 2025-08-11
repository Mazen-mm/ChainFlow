import axios from '../../../Shared/api/axios';

export const fetchShipments = () => axios.get('/api/shipment/');
export const fetchShipmentById = (id) => axios.get(`/api/shipment/${id}`);
export const updateShipment = (id, data) => axios.patch(`/api/shipment/${id}`, data);
