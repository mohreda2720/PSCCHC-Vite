import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../axiosconfig/AxiosConfig';

const initialState = {
  DyRep: [],
  DyRepLoading: false,
  DyRepError: null,
};

export const fetchDyRep = createAsyncThunk(
  'DyRep/fetchDyRep',
  async (menuSerial) => {
    try {
      const response = await axiosConfig.get(`/DyRep/GetByMenuSerial?menuSerial=${menuSerial}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

// export const fetchDyRep = createAsyncThunk(
//     'DyRep/fetchDyRep',
//     async ({userId, password}) => {
//       try {
//         const response = await axiosConfig.get(`/User/FindMultiple`,{
//           params:{
//               userName: userId,
//               password: password
//           }
//         });
//         return response.data;
//       } catch (error) {
//         console.log(error);
//         throw error;
//       }
//     }
//   );

const DyRepSlice = createSlice({
  name: 'DyRep',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDyRep.pending, (state) => {
        state.DyRepLoading = true;
        state.DyRepError = null;
      })
      .addCase(fetchDyRep.fulfilled, (state, action) => {
        state.DyRepLoading = false;
        state.DyRep = action.payload;
      })
      .addCase(fetchDyRep.rejected, (state, action) => {
        state.DyRepLoading = false;
        state.DyRepError = action.error.message;
      });
  }
});

export default DyRepSlice.reducer;
