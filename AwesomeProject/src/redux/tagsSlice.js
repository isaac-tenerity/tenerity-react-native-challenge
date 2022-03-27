import { createSlice } from '@reduxjs/toolkit';

/**
 * Redux slice for the tag records.
 */
export const tagsSlice = createSlice({
  name: 'tags',
  initialState: {
    tags: [],
  },
  reducers: {
    setTags: (state, action) => {
      state.tags = action.payload;
    },
  },
});

// ACTIONS export
export const { setTags } = tagsSlice.actions;
export default tagsSlice.reducer;
