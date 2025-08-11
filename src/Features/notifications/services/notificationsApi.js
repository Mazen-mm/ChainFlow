import axios from '../../../Shared/api/axios';

export const fetchNotifications = (params) => axios.get('/api/notification/', { params });
export const markAllRead = () => axios.patch('/api/notification/');
export const deleteAllNotifications = () => axios.delete('/api/notification/');
export const markNotificationRead = (id) => axios.patch(`/api/notification/${id}`);
export const deleteNotification = (id) => axios.delete(`/api/notification/${id}`);
