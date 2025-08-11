import axios from '../../../Shared/api/axios';

export const fetchKpis = () => axios.get('/api/analytics/kpis');
