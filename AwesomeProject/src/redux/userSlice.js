import { createSlice } from '@reduxjs/toolkit';

/**
 * Redux slice for user record.
 */
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    account: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.account = action.payload;
    },
  },
});

// ACTIONS export
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
