import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './services/subscriptionApi';

const initialState = {
  subscription: null,
  loading: false,
  error: null,
  message: null,
};

export const checkoutSubscription = createAsyncThunk(
  'subscription/checkoutSubscription',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.checkoutSubscription(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkoutSubscription.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(checkoutSubscription.fulfilled, (state, action) => {
        state.loading = false;
        state.subscription = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(checkoutSubscription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default subscriptionSlice.reducer;
