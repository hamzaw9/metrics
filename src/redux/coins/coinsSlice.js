import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCoins = createAsyncThunk(
  'coins/fetchCoins',
  async (_, { rejectWithValue }) => axios
    .get('https://api.coincap.io/v2/assets')
    .then((res) => res.data.data)
    .catch((err) => rejectWithValue(err.message)),
);

export const fetchCoinDetails = createAsyncThunk(
  'coins/fetchCoinDetails',
  async (coinId, { rejectWithValue }) => axios
    .get(`https://api.coincap.io/v2/assets/${coinId}`)
    .then((res) => res.data.data)
    .catch((err) => rejectWithValue(err.message)),
);

const coinSlice = createSlice({
  name: 'coins',
  initialState: {
    coins: [],
    isLoading: false,
    coinDetails: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(fetchCoins.fulfilled, (state, { payload }) => ({
      ...state,
      isLoading: false,
      coins: payload,
    }));
    builder.addCase(fetchCoins.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(fetchCoinDetails.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(fetchCoinDetails.fulfilled, (state, { payload }) => ({
      ...state,
      isLoading: false,
      coinDetails: payload,
    }));
    builder.addCase(fetchCoinDetails.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
  },
});

export default coinSlice.reducer;
