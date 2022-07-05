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
    initAnswer: state => {
      state.answers = [];
    },
  },
});

export const { asnwerUpdate, initAnswer } = questionSlice.actions;

export default questionSlice.reducer;
