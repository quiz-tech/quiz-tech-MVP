import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  leftTime: 10000,
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    countDown: state => {
      state.leftTime = state.leftTime -= 1000;
    },
    initTimer: state => {
      state.leftTime = 600000;
    },
  },
});

export const { countDown, initTimer } = timerSlice.actions;
export default timerSlice.reducer;
