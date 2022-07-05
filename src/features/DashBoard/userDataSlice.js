import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contents: {},
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    userDataUpdate: (state, actions) => {
      state.answers = actions.payload;
    },
  },
});

export const { userDataUpdate } = userDataSlice.actions;
export default userDataSlice.reducer;
