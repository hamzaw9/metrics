import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';

const store = configureStore({
  reducer: {
    coins: homeReducer,
  },
});
export default store;
