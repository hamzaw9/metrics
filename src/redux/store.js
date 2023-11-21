import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './coins/coinsSlice';

const store = configureStore({
  reducer: {
    coins: homeReducer,
  },
});
export default store;
