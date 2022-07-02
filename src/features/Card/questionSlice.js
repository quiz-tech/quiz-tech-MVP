import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answers: [],
};

const questionSlice = createSlice({
  name: 'answersData',
  initialState,
  reducers: {
    asnwerUpdate: (state, actions) => {
      state.answers = [...state.answers, actions.payload];
    },
  },
});

export const { asnwerUpdate } = questionSlice.actions;

export default questionSlice.reducer;
