import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../axiosconfig/AxiosConfig';

const initialState = {
  Discover: [],
  loading: false,
  error: null,
};

export const fetchDiscover = createAsyncThunk(
  'Discover/fetchDiscover',
  async () => {
    try {
      const response = await axiosConfig.get('/staticpage/getall');
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;

    }
  }
);

const DiscoverSlice = createSlice({
  name: 'Discover',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiscover.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDiscover.fulfilled, (state, action) => {
        state.loading = false;
        state.Discover = action.payload;
      })
      .addCase(fetchDiscover.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default DiscoverSlice.reducer;
