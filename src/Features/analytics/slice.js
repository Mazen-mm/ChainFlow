import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './services/analyticsApi';

const initialState = {
  kpis: null,
  loading: false,
  error: null,
};

export const fetchKpis = createAsyncThunk(
  'analytics/fetchKpis',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.fetchKpis();
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchKpis.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchKpis.fulfilled, (state, action) => {
        state.loading = false;
        state.kpis = action.payload;
      })
      .addCase(fetchKpis.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default analyticsSlice.reducer;
