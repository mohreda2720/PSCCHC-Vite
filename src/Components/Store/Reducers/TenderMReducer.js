import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../axiosconfig/AxiosConfig';

const initialState = {
  TenderM: [],
  loading: false,
  error: null,
};

export const fetchTenderM = createAsyncThunk(
  'TenderM/fetchTenderM',
  async () => {
    try {
      const response = await axiosConfig.get('/TenderM/GetTendersM');
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const TenderMSlice = createSlice({
  name: 'TenderM',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTenderM.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTenderM.fulfilled, (state, action) => {
        state.loading = false;
        state.TenderM = action.payload;
      })
      .addCase(fetchTenderM.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default TenderMSlice.reducer;
