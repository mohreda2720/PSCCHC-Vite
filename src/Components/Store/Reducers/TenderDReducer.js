import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../axiosconfig/AxiosConfig';

const initialState = {
  TenderD: [],
  loading: false,
  error: null,
};

export const fetchTenderD = createAsyncThunk(
  'TenderD/fetchTenderD',
  async () => {
    try {
      const response = await axiosConfig.get('/TenderD/GetTendersD');
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const TenderDSlice = createSlice({
  name: 'TenderD',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTenderD.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTenderD.fulfilled, (state, action) => {
        state.loading = false;
        state.TenderD = action.payload;
      })
      .addCase(fetchTenderD.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default TenderDSlice.reducer;
