import { configureStore } from '@reduxjs/toolkit';
import idReducer from './id/idSlice.jsx'; // Path to your slice

const store = configureStore({
  reducer: {
    id: idReducer,
  },
});

export default store;
