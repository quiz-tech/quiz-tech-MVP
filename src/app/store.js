import { configureStore } from '@reduxjs/toolkit';
import timerReducer from '../features/Card/timerSlice';
import resultReducer from '../features/Card/resultSlice';
export const store = configureStore({
  reducer: {
    timer: timerReducer,
    result: resultReducer,
  },
});
