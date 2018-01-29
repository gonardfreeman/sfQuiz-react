export const ANSWER_CORRECT = 'ANSWER_CORRECT';
export const ANSWER_INCORRECT = 'ANSWER_INCORRECT';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';
export const SKIP_QUESTION = 'SKIP_QUESTION';

export default {
  checkAnswer() {
    return {
      type: ANSWER_CORRECT,
    };
  },
  clearResultsAction() {
    return {
      type: CLEAR_RESULTS
    };
  },
  skipQuestion() {
    return {
      type: SKIP_QUESTION
    }
  }
};
