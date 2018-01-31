import { GET_QUESTION } from '../../actions/getQuestion';
import { reduceQuestions, countAnswers } from '../../helpers/reduceQuestions';

import * as td from '../test_data.json';

const defaultState = {
  question: null,
  answers: null,
  rightAnswers: 0,
  allQuestions: reduceQuestions(td),
  totalQuestions: reduceQuestions(td).length,
  questionNumber: 0
};

export default function fetchQuestion(state = defaultState, action) {
  switch (action.type) {
    case GET_QUESTION:
      const { questionNumber } = action;
      if (questionNumber === 0) {
        return Object.assign({}, state, {
          question: '',
          answers: [],
          rightAnswers: 3,
          questionNumber: questionNumber
        });
      }
      return Object.assign({}, state, {
        question: state.allQuestions[questionNumber - 1].question,
        answers: state.allQuestions[questionNumber - 1].answers,
        rightAnswers: countAnswers(
          state.allQuestions[questionNumber - 1].answers
        ),
        questionNumber: questionNumber
      });
    default:
      return state;
  }
}
