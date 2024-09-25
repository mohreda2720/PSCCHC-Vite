// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axiosConfig from '../../axiosconfig/AxiosConfig';

// export const fetchMiniCardData = createAsyncThunk(
//   'miniCards/fetchMiniCardData',
//   async (pg_Lang) => {
//     const response = await axiosConfig.get(`News/Getnews?${pg_Lang}`);
//     const data = await response.json();
//     return data;
//   }
// );

// const miniCardsSlice = createSlice({
//   name: 'miniCards',
//   initialState: [],
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchMiniCardData.fulfilled, (state, action) => {
//       return action.payload;
//     });
//   },
// });

// export default miniCardsSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../axiosconfig/AxiosConfig';

const initialState = {
  miniCardsData: [],
  loading: false,
  error: null,
};

export const fetchMiniCardData = createAsyncThunk(
  'miniCardsData/fetchMiniCardData',
  async (pTake) => {
    try {
      const response = await axiosConfig.get(`News/Getnews`, {
        params: {
          pTake: pTake
        }
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);


const miniCardsSlice = createSlice({
  name: 'miniCardsData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMiniCardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMiniCardData.fulfilled, (state, action) => {
        state.loading = false;
        state.miniCardsData = action.payload;
      })
      .addCase(fetchMiniCardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default miniCardsSlice.reducer;
