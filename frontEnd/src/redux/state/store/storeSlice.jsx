import { createSlice } from '@reduxjs/toolkit';

const storeSlice = createSlice({
  name: 'store',
  initialState: {
    id: null, // Initial value of the ID
    token: null, // Initial value of the token
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload; // Save the ID from the action's payload
    },

    setToken : (state, action) => {
      state.token = action.payload; // Save the token from the action's payload
    },
  },
});

export const { setId, setToken } = storeSlice.actions;
export default storeSlice.reducer;
