import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../axiosconfig/AxiosConfig";

const initialState = {
  contactusData: [],
  loading: false,
  error: null,
};

export const fetchContactusData = createAsyncThunk(
  "contactusData/fetchContactusData",
  async (pTake) => {
    try {
      const response = await axiosConfig.get(`Contactus/Contact`, {
        // params: {
        //   pTake: pTake
        // }
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const contactusSlice = createSlice({
  name: "contactusData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactusData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContactusData.fulfilled, (state, action) => {
        state.loading = false;
        state.contactusData = action.payload;
      })
      .addCase(fetchContactusData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default contactusSlice.reducer;
