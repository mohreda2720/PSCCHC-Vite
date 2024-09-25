import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../axiosconfig/AxiosConfig';


const initialState = {
  OurLocation: [],
  locationLoading: false,
  error: null,
};

export const fetchOurLocation = createAsyncThunk(
  'OurLocation/fetchOurLocation',
  async (id) => {
    try {
      const response = await axiosConfig.get(`/staticpage/FindByPageId?pageId=${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;

    }
  }
);

const OurLocationSlice = createSlice({
  name: 'OurLocation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOurLocation.pending, (state) => {
        state.locationLoading = true;
        state.error = null;
      })
      .addCase(fetchOurLocation.fulfilled, (state, action) => {
        state.locationLoading = false;
        state.OurLocation = action.payload;
      })
      .addCase(fetchOurLocation.rejected, (state, action) => {
        state.locationLoading = false;
        state.error = action.error.message;
      });
  }
});

export default OurLocationSlice.reducer;
