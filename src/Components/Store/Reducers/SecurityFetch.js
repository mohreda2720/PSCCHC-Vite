import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../axiosconfig/AxiosConfig';


const initialState = {
  Security: [],
  SecurityLoading: false,
  error: null,
};

export const fetchSecurity = createAsyncThunk(
  'Security/fetchSecurity',
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

const SecuritySlice = createSlice({
  name: 'Security',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSecurity.pending, (state) => {
        state.SecurityLoading = true;
        state.error = null;
      })
      .addCase(fetchSecurity.fulfilled, (state, action) => {
        state.SecurityLoading = false;
        state.Security = action.payload;
      })
      .addCase(fetchSecurity.rejected, (state, action) => {
        state.SecurityLoading = false;
        state.error = action.error.message;
      });
  }
});

export default SecuritySlice.reducer;
