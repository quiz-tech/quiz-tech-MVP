import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPassed: 0,
  correctCount: 0,
};

export const resultSlice = createSlice({
  name: 'resultInfo',
  initialState,
  reducers: {
    resultUpdate: (state, actions) => {
      state.isPassed = actions.payload >= 7 && 1;
      state.correctCount = actions.payload;
    },
    initResult: state => {
      state.isPassed = 0;
      state.correctCount = 0;
    },
  },
});

export const { resultUpdate, initResult } = resultSlice.actions;
export default resultSlice.reducer;
