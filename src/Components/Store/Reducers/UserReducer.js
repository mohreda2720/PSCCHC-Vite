import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../axiosconfig/AxiosConfig';

const initialState = {
  Users: [],
  UserLoading: false,
  UserError: null,
};

export const fetchUsers = createAsyncThunk(
  'Users/fetchUsers',
  async (userData) => {
    try {
      const response = await axiosConfig.get(`/User/FindMultiple?userName=${userData.userId}&password=${userData.password}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const UsersSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    clearUsers(state) {
      state.Users = [];
      state.UserLoading = false;
      state.UserError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.UserLoading = true;
        state.UserError = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.UserLoading = false;
        state.Users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.UserLoading = false;
        state.UserError = action.error.message;
      });
  }
});

export const { clearUsers } = UsersSlice.actions;

export default UsersSlice.reducer;
