import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './services/companyApi';

const initialState = {
  companies: [],
  company: null,
  loading: false,
  error: null,
  pagination: { page: 1, limit: 20, total: 0 },
};

export const fetchCompanies = createAsyncThunk(
  'company/fetchCompanies',
  async (params, { rejectWithValue }) => {
    try {
      const res = await api.fetchCompanies(params);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const fetchCompanyById = createAsyncThunk(
  'company/fetchCompanyById',
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.fetchCompanyById(id);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const approveCompany = createAsyncThunk(
  'company/approveCompany',
  async ({ companyId, data }, { rejectWithValue }) => {
    try {
      const res = await api.approveCompany(companyId, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload.data;
        state.pagination = {
          page: action.payload.page,
          limit: action.payload.limit,
          total: action.payload.total,
        };
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCompanyById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompanyById.fulfilled, (state, action) => {
        state.loading = false;
        state.company = action.payload.data;
      })
      .addCase(fetchCompanyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(approveCompany.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(approveCompany.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(approveCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default companySlice.reducer;
