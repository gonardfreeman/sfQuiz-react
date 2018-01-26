import {
  GET_QUESTION_REQUEST,
  GET_QUESTION_SUCCESS
} from '../../actions/get_question';
import {
  reduceQuestions,
  countAnswers
} from '../../helpers/reduceQuestions';

import * as td from '../test_data.json';

const defaultState = {
  question: null,
  answers: null,
  question_fetched: false,
  regex: /^\+?-?\??/gm,
  rightAnswers: 0,
  allQuestions: reduceQuestions(td),
};




export default function fetchQuestion(state = defaultState, action) {
  switch (action.type) {
    case GET_QUESTION_REQUEST:
      const { random_number } = action;

      return Object.assign({}, state, {
        question: state.allQuestions[random_number-1].question,
        answers: state.allQuestions[random_number-1].answers,
        question_fetched: false,
        rightAnswers: countAnswers(state.allQuestions[random_number-1].answers)
      });
    case GET_QUESTION_SUCCESS:
      return Object.assign({}, state, {
        question_fetched: true
      });
    default:
      return state;
  }
}
