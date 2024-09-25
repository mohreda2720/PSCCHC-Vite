import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../axiosconfig/AxiosConfig';

const initialState = {
  OneNews: [],
  OneNewsLoading: false,
  OneNewsError: null,
};

export const fetchOneNews = createAsyncThunk(
  'OneNews/fetchOneNews',
  async ({ newsId, pageLang }) => {
    try {
      const response = await axiosConfig.get(`/News/GetWithId`, {
        params: {
          newsId,
          pageLang
        }
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);



const OneNewsSlice = createSlice({
  name: 'OneNews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneNews.pending, (state) => {
        state.OneNewsLoading = true;
        state.OneNewsError = null;
      })
      .addCase(fetchOneNews.fulfilled, (state, action) => {
        state.OneNewsLoading = false;
        state.OneNews = action.payload;
      })
      .addCase(fetchOneNews.rejected, (state, action) => {
        state.OneNewsLoading = false;
        state.OneNewsError = action.error.message;
      });
  }
});

export default OneNewsSlice.reducer;
