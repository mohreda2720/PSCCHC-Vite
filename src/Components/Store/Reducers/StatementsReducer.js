import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../axiosconfig/AxiosConfig';


const initialState = {
  Statements: [],
  loading: false,
  error: null,
};

export const fetchStatements = createAsyncThunk(
  'Statements/fetchStatements',
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

const StatementsSlice = createSlice({
  name: 'Statements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStatements.fulfilled, (state, action) => {
        state.loading = false;
        state.Statements = action.payload;
      })
      .addCase(fetchStatements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default StatementsSlice.reducer;
