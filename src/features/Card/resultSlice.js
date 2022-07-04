import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPassed: false,
  correctCount: 0,
};

export const resultSlice = createSlice({
  name: 'resultInfo',
  initialState,
  reducers: {
    resultUpdate: (state, actions) => {
      state.isPassed = actions.payload >= 7;
      state.correctCount = actions.payload;
    },
  },
});

export const { resultUpdate } = resultSlice.actions;
export default resultSlice.reducer;
