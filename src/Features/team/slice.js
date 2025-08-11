import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './services/teamApi';

const initialState = {
  inviteStatus: null,
  verifyStatus: null,
  loading: false,
  error: null,
};

export const inviteTeamMember = createAsyncThunk(
  'team/inviteTeamMember',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.inviteTeamMember(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const verifyTeamInvite = createAsyncThunk(
  'team/verifyTeamInvite',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.verifyTeamInvite(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(inviteTeamMember.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(inviteTeamMember.fulfilled, (state, action) => {
        state.loading = false;
        state.inviteStatus = action.payload.message;
      })
      .addCase(inviteTeamMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyTeamInvite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyTeamInvite.fulfilled, (state, action) => {
        state.loading = false;
        state.verifyStatus = action.payload.message;
      })
      .addCase(verifyTeamInvite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default teamSlice.reducer;
