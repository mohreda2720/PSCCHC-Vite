import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../axiosconfig/AxiosConfig';

const initialState = {
  TabDet: [],
  loading: false,
  error: null,
};

export const fetchTabDet = createAsyncThunk(
  'TabDet/fetchTabDet',
  async (id) => {
    try {
      const response = await axiosConfig.get(`/TabDet/GetAllTabDet?PageId=${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const TabDetSlice = createSlice({
  name: 'TabDet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTabDet.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTabDet.fulfilled, (state, action) => {
        state.loading = false;
        state.TabDet = action.payload;
      })
      .addCase(fetchTabDet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default TabDetSlice.reducer;
