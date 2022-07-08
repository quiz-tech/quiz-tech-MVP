import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userProfile: {},
  resultData: {},
};

export const userDataSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    userProfileUpdate: (state, actions) => {
      state.userProfile = actions.payload;
    },
    profileDataUpdate: (state, actions) => {
      state.resultData = actions.payload;
    },
  },
});

export const { profileDataUpdate } = userDataSlice.actions;
export const { userProfileUpdate } = userDataSlice.actions;
export default userDataSlice.reducer;
