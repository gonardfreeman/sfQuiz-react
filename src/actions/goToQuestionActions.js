export const GO_TO_QUESTION_INPUT = 'GO_TO_QUESTION_INPUT';

export default {
  goToQuestionInputAction(inp) {
    return {
      type: GO_TO_QUESTION_INPUT,
      inp
    };
  }
};
