import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../axiosconfig/AxiosConfig';


const initialState = {
  Certificate: [],
  loading: false,
  error: null,
};

export const fetchCertificate = createAsyncThunk(
  'Certificate/fetchCertificate',
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

const CertificateSlice = createSlice({
  name: 'Certificate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCertificate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCertificate.fulfilled, (state, action) => {
        state.loading = false;
        state.Certificate = action.payload;
      })
      .addCase(fetchCertificate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default CertificateSlice.reducer;
