export const ADD_QUESTION_TO_PULL = 'ADD_QUESTION_TO_PULL';
export const RESET_PULL = 'RESET_PULL';

export default {
  addQuestionToPull(num) {
    return {
      type: ADD_QUESTION_TO_PULL,
      num
    };
  },
  resetPull() {
    return {
      type: RESET_PULL
    };
  }
};
