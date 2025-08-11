import axios from '../../../Shared/api/axios';

export const checkoutSubscription = (data) => axios.post('/api/subscription/checkout', data);
