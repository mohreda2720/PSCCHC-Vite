import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../axiosconfig/AxiosConfig";

const initialState = {
  gallaryData: [],
  loading: false,
  error: null,
};

export const fetchGallaryData = createAsyncThunk(
  "gallaryData/fetchGallaryData",
  async () => {
    try {
      const response = await axiosConfig.get(`Gallary/GetAll`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const GallerySlice = createSlice({
  name: "gallaryData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGallaryData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGallaryData.fulfilled, (state, action) => {
        state.loading = false;
        state.gallaryData = action.payload;
      })
      .addCase(fetchGallaryData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default GallerySlice.reducer;
