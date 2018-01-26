import {
  INCREASE_CORRECT_COUNT,
  INCREASE_ANSWER_COUNT,
  CLEAR_RESULTS
} from '../../actions/questionCountActions';

const defaultState = {
  correctAnswerCount: 0,
  answerCount: 0
};

export default function questionCountReducer(state = defaultState, action) {
  switch (action.type) {
    case INCREASE_CORRECT_COUNT:
      return Object.assign({}, state, {
        correctAnswerCount: (state.correctAnswerCount += 1)
      });
    case CLEAR_RESULTS:
      return Object.assign({}, state, {
        correctAnswerCount: 0,
        answerCount: 0
      });
    case INCREASE_ANSWER_COUNT:
      return Object.assign({}, state, {
        answerCount: (state.answerCount += 1)
      });
    default:
      return state;
  }
}
