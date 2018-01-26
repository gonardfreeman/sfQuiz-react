export const GENERATE_RANDOM_NUMBER = 'GENERATE_RANDOM_NUMBER';
export const GET_RANDOM_QUESTION = 'GET_RANDOM_QUESTION';
export const GET_TOTAL_QUESTIONS = 'GET_TOTAL_QUESTIONS';


export default {
  generateRandomNumber(num=0) {
    return {
      type: GENERATE_RANDOM_NUMBER,
      num
    };
  },
  getTotalQuestions() {
    return {
      type: GET_TOTAL_QUESTIONS
    };
  },
};
