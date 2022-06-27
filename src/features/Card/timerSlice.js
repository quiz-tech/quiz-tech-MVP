import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  time: 3000,
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    countSeconds: state => {
      state.time -= 1000;
    },
  },
});

export const { countSeconds } = timerSlice.actions;
export default timerSlice.reducer;
