import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './services/partnersApi';

const initialState = {
  partners: [],
  loading: false,
  error: null,
};

export const fetchPartnerConnections = createAsyncThunk(
  'partners/fetchPartnerConnections',
  async (params, { rejectWithValue }) => {
    try {
      const res = await api.fetchPartnerConnections(params);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const createPartnerConnection = createAsyncThunk(
  'partners/createPartnerConnection',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.createPartnerConnection(data);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const updatePartnerConnection = createAsyncThunk(
  'partners/updatePartnerConnection',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await api.updatePartnerConnection(id, data);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPartnerConnections.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPartnerConnections.fulfilled, (state, action) => {
        state.loading = false;
        state.partners = action.payload;
      })
      .addCase(fetchPartnerConnections.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createPartnerConnection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPartnerConnection.fulfilled, (state, action) => {
        state.loading = false;
        state.partners.unshift(action.payload);
      })
      .addCase(createPartnerConnection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updatePartnerConnection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePartnerConnection.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updatePartnerConnection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default partnersSlice.reducer;
