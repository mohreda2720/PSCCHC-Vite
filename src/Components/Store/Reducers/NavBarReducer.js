import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../axiosconfig/AxiosConfig';

const initialState = {
  NavArray: [],
  loading: false,
  error: null,
};

export const fetchNavbar = createAsyncThunk(
  'App/fetchNavbar',
  async () => {
    try {
      const response = await axiosConfig.get('/StkMenu/GetAll');
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;

    }
  }
);

const navbarSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavbar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNavbar.fulfilled, (state, action) => {
        state.loading = false;
        state.NavArray = action.payload;
      })
      .addCase(fetchNavbar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default navbarSlice.reducer;
