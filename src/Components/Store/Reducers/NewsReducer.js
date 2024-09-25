import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../axiosconfig/AxiosConfig';

const initialState = {
  About: [],
  loading: false,
  error: null,
};

export const fetchAbout = createAsyncThunk(
  'About/fetchAbout',
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

const aboutSlice = createSlice({
  name: 'About',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAbout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAbout.fulfilled, (state, action) => {
        state.loading = false;
        state.About = action.payload;
      })
      .addCase(fetchAbout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default aboutSlice.reducer;
