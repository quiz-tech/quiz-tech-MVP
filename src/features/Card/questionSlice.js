import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answers: [],
  questions: [],
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
    questionsUpdate: (state, actions) => {
      state.questions = actions.payload;
    },
  },
});

export const { asnwerUpdate, initAnswer, questionsUpdate } =
  questionSlice.actions;

export default questionSlice.reducer;
