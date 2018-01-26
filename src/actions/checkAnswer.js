export const RESET_CHECKER = 'RESET_CHECKER';
export const ANSWER_CORRECT = 'ANSWER_CORRECT';
export const ANSWER_INCORRECT = 'ANSWER_INCORRECT';

export default {
  resetCheckerAction() {
    return {
      type: RESET_CHECKER
    };
  },
  answerCorrectAction() {
    return {
      type: ANSWER_CORRECT
    };
  },
  asnwerIncorrectAction() {
    return {
      type: ANSWER_INCORRECT
    };
  }
};
