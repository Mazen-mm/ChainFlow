import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './services/shipmentsApi';

const initialState = {
  shipments: [],
  shipment: null,
  loading: false,
  error: null,
};

export const fetchShipments = createAsyncThunk(
  'shipments/fetchShipments',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.fetchShipments();
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const fetchShipmentById = createAsyncThunk(
  'shipments/fetchShipmentById',
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.fetchShipmentById(id);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const updateShipment = createAsyncThunk(
  'shipments/updateShipment',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await api.updateShipment(id, data);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const shipmentsSlice = createSlice({
  name: 'shipments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShipments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchShipments.fulfilled, (state, action) => {
        state.loading = false;
        state.shipments = action.payload;
      })
      .addCase(fetchShipments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchShipmentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchShipmentById.fulfilled, (state, action) => {
        state.loading = false;
        state.shipment = action.payload;
      })
      .addCase(fetchShipmentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateShipment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateShipment.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateShipment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default shipmentsSlice.reducer;
