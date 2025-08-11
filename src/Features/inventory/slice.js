// Thunk to update inventory stock after order completion
export const fulfillOrderInventory = createAsyncThunk(
  'inventory/fulfillOrderInventory',
  async (order, { rejectWithValue }) => {
    try {
      // order.items: [{ productId, quantity }]
      // For each item, update inventory stock accordingly
      // This assumes a backend endpoint exists to handle this atomically
      // If not, you would loop and call updateInventory for each item
      const res = await api.fulfillOrderInventory(order._id);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './services/inventoryApi';

const initialState = {
  inventory: [],
  item: null,
  loading: false,
  error: null,
  pagination: { page: 1, limit: 20, total: 0 },
};

export const createInventory = createAsyncThunk(
  'inventory/createInventory',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.createInventory(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const deleteInventory = createAsyncThunk(
  'inventory/deleteInventory',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteInventory(id);
      return { id };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const fetchInventory = createAsyncThunk(
  'inventory/fetchInventory',
  async (params, { rejectWithValue }) => {
    try {
      const res = await api.fetchInventory(params);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const fetchInventoryById = createAsyncThunk(
  'inventory/fetchInventoryById',
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.fetchInventoryById(id);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const updateInventory = createAsyncThunk(
  'inventory/updateInventory',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await api.updateInventory(id, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.loading = false;
        state.inventory = action.payload.data;
        state.pagination = {
          page: action.payload.page,
          limit: action.payload.limit,
          total: action.payload.total,
        };
      })
      .addCase(fetchInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchInventoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInventoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload.data;
      })
      .addCase(fetchInventoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createInventory.fulfilled, (state, action) => {
        state.loading = false;
        state.inventory.unshift(action.payload.data.inventory);
      })
      .addCase(createInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateInventory.fulfilled, (state, action) => {
        state.loading = false;
        // Optionally update the item in state.inventory
      })
      .addCase(updateInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteInventory.fulfilled, (state, action) => {
        state.loading = false;
        state.inventory = state.inventory.filter(i => i._id !== action.payload.id);
      })
      .addCase(deleteInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default inventorySlice.reducer;
