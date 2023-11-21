import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: {},
  error: {},
  status: 'idle',
};

export const GetCoins = createAsyncThunk('coins/getAll', async () => {
  try {
    const response = await axios.get('https://api.coincap.io/v2/assets');
    return response.data;
  } catch (error) {
    return error.response;
  }
});

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetCoins.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(GetCoins.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.value = action.payload;
        console.log(action.payload);
      })
      .addCase(GetCoins.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectCoins = (state) => state.home.value;
export const selectStatus = (state) => state.home.status;
export const selectError = (state) => state.home.error;

export default homeSlice.reducer;
