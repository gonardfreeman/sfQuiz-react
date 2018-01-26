export const INCREASE_CORRECT_COUNT = 'INCREASE_CORRECT_COUNT';
export const INCREASE_ANSWER_COUNT = 'INCREASE_ANSWER_COUNT';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';

export default {
  increaseCorrectCountAction() {
    return {
      type: INCREASE_CORRECT_COUNT
    };
  },
  increaseAnswerCountAction() {
    return {
      type: INCREASE_ANSWER_COUNT
    };
  },
  clearResultsAction() {
    return {
      type: CLEAR_RESULTS
    };
  }
};
