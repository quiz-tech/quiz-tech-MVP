import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from '../features/DashBoard/userDataSlice';

export default configureStore({
  reducer: {
    userData: userDataReducer,
  },
});
