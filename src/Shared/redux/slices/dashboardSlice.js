

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';

// Fetch all analytics and dashboard data in parallel
export const fetchDashboardData = createAsyncThunk(
  'dashboard/fetchDashboardData',
  async (_, { rejectWithValue }) => {
    try {
      // Fetch all required data in parallel
      const [ordersRes, partnersRes, inventoryRes, productsRes, kpisRes] = await Promise.all([
        api.get('/order/'),
        api.get('/partner-connection/'),
        api.get('/inventory/'),
        api.get('/product/'),
        api.get('/analytics/kpis'),
      ]);

      // Orders
      const orders = ordersRes.data?.data || [];
      // Partners
      const partners = partnersRes.data?.data || [];
      // Inventory
      const inventory = inventoryRes.data?.data || [];
      // Products
      const products = productsRes.data?.data || [];
      // KPIs
      const kpis = kpisRes.data?.data || {};

      // Compute dashboard analytics
      // CompanyCard data
      const company = {
        employeeCount: 0, // Not available in endpoints, set to 0 or fetch from /user/ if needed
        partnerCount: partners.length,
        todaysOrders: orders.filter(o => new Date(o.createdAt).toDateString() === new Date().toDateString()).length,
        ordersRemaining: orders.filter(o => o.status !== 'Completed' && o.status !== 'Cancelled').length,
        currentPlan: 'Professional', // Not available, placeholder
        rechargeDays: 'N/A', // Not available, placeholder
        planPrice: '$999', // Not available, placeholder
      };

      // BudgetCard data
      const budget = {
        labels: ['Inventory Value', 'Ordered Value', 'Remaining Budget'],
        cost: [kpis.inventoryValue || 0, kpis.orderedValue || 0, kpis.remainingBudget || 0],
        colors: ['#b667f1', '#0c2d4a', '#f75c5c'],
      };

      // Orders widget data
      const orderStats = {
        total: orders.length,
        pending: orders.filter(o => o.status === 'Submitted' || o.status === 'Created').length,
        arrived: orders.filter(o => o.status === 'Delivered' || o.status === 'Received' || o.status === 'Completed').length,
        cancelled: orders.filter(o => o.status === 'Cancelled' || o.status === 'Declined' || o.status === 'Rejected').length,
        incoming: orders.filter(o => o.status === 'Shipped' || o.status === 'Ready_to_ship').length,
      };
      // For map, fake locations for demo (real API does not provide lat/lng)
      const orderLocations = orders.slice(0, 10).map((o, i) => ({
        lat: 30 + i, lng: 30 + i, status: 'pending', city: o.buyer || 'City', // Placeholder
      }));

      // Shipments widget data (use inventory as shipment proxy if no shipment endpoint)
      const shipments = inventory.slice(0, 10).map((inv, i) => ({
        id: inv._id,
        origin: inv.location?.locationName || 'Unknown',
        destination: 'Unknown',
        date: inv.lastUpdated || '',
        status: inv.status || 'In Stock',
        carrier: 'N/A',
        eta: '',
      }));

      // --- Dynamic Chart Data ---
      // AverageCard: average order value per day for last 5 days
      const last5Days = Array.from({ length: 5 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (4 - i));
        return d;
      });
      const avgLabels = last5Days.map(d => `${d.getMonth() + 1}/${d.getDate()}`);
      const avgValues = last5Days.map(d => {
        const dayOrders = orders.filter(o => new Date(o.createdAt).toDateString() === d.toDateString());
        if (!dayOrders.length) return 0;
        return (
          dayOrders.reduce((sum, o) => sum + (o.totalAmount || 0), 0) / dayOrders.length
        );
      });

      // OverCard: weekly order count for last 7 days
      const last7Days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (6 - i));
        return d;
      });
      const overLabels = last7Days.map(d => d.toLocaleDateString('en-US', { weekday: 'short' }));
      const overValues = last7Days.map(d => orders.filter(o => new Date(o.createdAt).toDateString() === d.toDateString()).length);
      // Compare to previous week for percent
      const prev7Days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (13 - i));
        return d;
      });
      const prevOverValues = prev7Days.map(d => orders.filter(o => new Date(o.createdAt).toDateString() === d.toDateString()).length);
      const percent = (() => {
        const sum = overValues.reduce((a, b) => a + b, 0);
        const prevSum = prevOverValues.reduce((a, b) => a + b, 0);
        if (prevSum === 0) return 100;
        return Math.round(((sum - prevSum) / prevSum) * 100);
      })();

      // PerformanceCard: sales (totalAmount) per day for last 6 days
      const perfLabels = last7Days.slice(1).map(d => d.toLocaleDateString('en-US', { weekday: 'short' }));
      const perfValues = last7Days.slice(1).map(d => {
        const dayOrders = orders.filter(o => new Date(o.createdAt).toDateString() === d.toDateString());
        return dayOrders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);
      });

      // Overview for DashOverView
      const overview = {
        company,
        budget,
        average: { labels: avgLabels, values: avgValues },
        weekly: { labels: overLabels, values: overValues, percent },
        performance: { labels: perfLabels, values: perfValues },
      };

      return {
        overview,
        orders: { stats: orderStats, locations: orderLocations },
        shipments,
      };
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    overview: null,
    orders: null,
    shipments: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.overview = action.payload.overview;
        state.orders = action.payload.orders;
        state.shipments = action.payload.shipments;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;
