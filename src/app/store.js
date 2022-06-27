import { configureStore } from '@reduxjs/toolkit';
import timerReducer from '../features/Card/timerSlice';

export const store = configureStore({
  reducer: {
    timer: timerReducer,
  },
});
