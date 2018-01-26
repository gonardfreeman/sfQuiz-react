export const CHOOSE_ANSWER = 'CHOOSE_ANSWER';
export const UNCHOOSE_ANSWER = 'UNCHOOSE_ANSWER';
export const CLEAR_ANSWERS = 'CLEAR_ANSWERS';

export default {
  chooseAnswer(pos) {
    return {
      type: CHOOSE_ANSWER,
      pos
    };
  },
  unchooseAnswer(pos) {
    return {
      type: UNCHOOSE_ANSWER,
      pos
    };
  },
  clearAnswers() {
    return {
      type: CLEAR_ANSWERS
    };
  }
};
