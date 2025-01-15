import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './store/storeSlice.jsx'; // Path to your slice

const store = configureStore({
  reducer: {
    storeData: storeReducer,

  },
});

export default store;
