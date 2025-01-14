import { createSlice } from '@reduxjs/toolkit';

const idSlice = createSlice({
  name: 'id',
  initialState: {
    value: null, // Initial value of the ID
  },
  reducers: {
    setId: (state, action) => {
      state.value = action.payload; // Save the ID from the action's payload
    },
  },
});

export const { setId } = idSlice.actions;
export default idSlice.reducer;
