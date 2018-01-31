import {
  ANSWER_CORRECT,
  CLEAR_RESULTS,
  SKIP_QUESTION
} from '../../actions/checkAnswer';

const defaultState = {
  correctAnswerCount: 0,
  answerCount: 0
};

export default function questionCountReducer(state = defaultState, action) {
  switch (action.type) {
    case ANSWER_CORRECT:
      return Object.assign({}, state, {
        correctAnswerCount: (state.correctAnswerCount += 1)
      });
    case CLEAR_RESULTS:
      return Object.assign({}, state, {
        correctAnswerCount: 0,
        answerCount: 0
      });
    case SKIP_QUESTION:
      return Object.assign({}, state, {
        answerCount: (state.answerCount += 1)
      });
    default:
      return state;
  }
}
