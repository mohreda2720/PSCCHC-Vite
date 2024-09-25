import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../axiosconfig/AxiosConfig";

const initialState = {
  CardData: [],
  loading: false,
  error: null,
};

export const fetchCardData = createAsyncThunk(
  "CardData/fetchCardData",
  async (userId) => {
    try {
      const response = await axiosConfig.get(`CardData/CardData?pageId=${userId}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const CardDataSlice = createSlice({
  name: "CardData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCardData.fulfilled, (state, action) => {
        state.loading = false;
        state.CardData = action.payload;
      })
      .addCase(fetchCardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default CardDataSlice.reducer;
