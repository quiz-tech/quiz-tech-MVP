import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  leftTime: 600000,
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    countDown: state => {
      state.leftTime = state.leftTime -= 1000;
    },
  },
});

export const { countDown } = timerSlice.actions;
export default timerSlice.reducer;
