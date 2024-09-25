import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../axiosconfig/AxiosConfig';

const initialState = {
  UserPage: [],
  UserPageLoading: false,
  UserPageError: null,
};

export const fetchUserPage = createAsyncThunk(
  'UserPage/fetchUserPage',
  async (userId) => {
    try {
      const response = await axiosConfig.get(`/UserPage/GetUserReports?userName=${userId}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

// export const fetchUserPage = createAsyncThunk(
//     'UserPage/fetchUserPage',
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

const UserPageSlice = createSlice({
  name: 'UserPage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPage.pending, (state) => {
        state.UserPageLoading = true;
        state.UserPageError = null;
      })
      .addCase(fetchUserPage.fulfilled, (state, action) => {
        state.UserPageLoading = false;
        state.UserPage = action.payload;
      })
      .addCase(fetchUserPage.rejected, (state, action) => {
        state.UserPageLoading = false;
        state.UserPageError = action.error.message;
      });
  }
});

export default UserPageSlice.reducer;
