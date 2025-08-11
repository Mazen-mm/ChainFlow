import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './services/employeesApi';

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.fetchEmployees();
      // Only users with role 'staff' are employees
      return res.data.data.filter(u => u.role === 'staff');
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default employeesSlice.reducer;
