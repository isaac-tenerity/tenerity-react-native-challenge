import { createSlice } from '@reduxjs/toolkit';

/**
 * Redux slice for offer records
 */
export const offersSlice = createSlice({
  name: 'offers',
  initialState: {
    offerRecords: [],
  },
  reducers: {
    setOfferRecords: (state, action) => {
      state.offerRecords = action.payload;
    },
  },
});

// ACTIONS export
export const { setOfferRecords: addStep } = offersSlice.actions;
export default offersSlice.reducer;
