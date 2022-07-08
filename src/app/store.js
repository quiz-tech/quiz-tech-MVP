import { configureStore } from '@reduxjs/toolkit';
import timerReducer from '../features/Card/timerSlice';
import resultReducer from '../features/Card/resultSlice';
import answersReducer from '../features/Card/questionSlice';
import userDataReducer from '../features/DashBoard/userDataSlice';

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    result: resultReducer,
    answers: answersReducer,
    userData: userDataReducer,
  },
});
