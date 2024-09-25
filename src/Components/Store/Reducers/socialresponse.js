import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../axiosconfig/AxiosConfig';

const initialState = {
  Social: [],
  loading: false,
  error: null,
};

export const fetchsocialResponse = createAsyncThunk(
  'Social/fetchsocialResponse',
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

const SocialSlice = createSlice({
  name: 'Social',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchsocialResponse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchsocialResponse.fulfilled, (state, action) => {
        state.loading = false;
        state.Social = action.payload;
      })
      .addCase(fetchsocialResponse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default SocialSlice.reducer;
