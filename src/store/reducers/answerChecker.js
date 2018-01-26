import {
  RESET_CHECKER,
  ANSWER_CORRECT,
  ANSWER_INCORRECT
} from '../../actions/checkAnswer';

const defaultState = {
  answerCorrect: false
};

export default function checkerReducer(state = defaultState, action) {
  switch (action.type) {
    case RESET_CHECKER:
      return Object.assign({}, state, {
        answerCorrect: false
      });
    case ANSWER_CORRECT:
      return Object.assign({}, state, {
        answerCorrect: true
      });
    case ANSWER_INCORRECT:
      return Object.assign({}, state, {
        answerCorrect: false
      });
    default:
      return state;
  }
}
