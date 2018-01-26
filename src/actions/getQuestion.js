export const GET_QUESTION = 'GET_QUESTION';

export default {
  getQuestion(questionNumber) {
    return {
      type: GET_QUESTION,
      questionNumber
    };
  }
};
