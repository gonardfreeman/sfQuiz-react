export const ANSWER_CORRECT = 'ANSWER_CORRECT';
export const ANSWER_INCORRECT = 'ANSWER_INCORRECT';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';

export default {
  checkAnswer: props => ((dispatch, getState) => {
    if (props) {
      dispatch(answerCorrectAction());
      return;
    }
    dispatch(asnwerIncorrectAction());
  }),
  clearResultsAction() {
    return {
      type: CLEAR_RESULTS
    };
  }
};

function answerCorrectAction() {
  return {
    type: ANSWER_CORRECT,
  };
}

function asnwerIncorrectAction() {
  return {
    type: ANSWER_INCORRECT
  };
}
