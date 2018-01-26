import {
  CHOOSE_ANSWER,
  UNCHOOSE_ANSWER,
  CLEAR_ANSWERS
} from '../../actions/choose_answer_actions';

const defaultState = {
  chosenAnswers: []
};

export default function chooseAnswer(state = defaultState, action) {
  switch (action.type) {
    case CHOOSE_ANSWER:
      return Object.assign({}, state, {
        chosenAnswers: [...state.chosenAnswers, action.pos]
      });
    case UNCHOOSE_ANSWER:
      return Object.assign({}, state, {
        chosenAnswers: state.chosenAnswers.filter(item => item !== action.pos)
      });
    case CLEAR_ANSWERS:
      return Object.assign({}, state, {
        chosenAnswers: []
      });
    default:
      return state;
  }
}
