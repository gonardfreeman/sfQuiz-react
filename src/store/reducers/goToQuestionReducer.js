import { GO_TO_QUESTION_INPUT } from '../../actions/goToQuestionActions';

const defaultState = {
  inputData: 0
};

export default function goToQuestionReducer(state = defaultState, action) {
  switch (action.type) {
    case GO_TO_QUESTION_INPUT:
      return Object.assign({}, state, {
        inputData: action.inp
      });
    default:
      return state;
  }
}
