export const GET_QUESTION_REQUEST = 'GET_QUESTION_REQUEST';
export const GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS';
export const GET_QUESTION_ERROR = 'GET_QUESTION_ERROR';
export const LOAD_QUESTIONS_REQUEST = 'LOAD_QUESTIONS_REQUEST';

export default {
  getQuestionRequest(random_number) {
    return {
      type: GET_QUESTION_REQUEST,
      random_number
    };
  },
  getQuestionSuccess() {
    return {
      type: GET_QUESTION_SUCCESS
    };
  },
  getQuestionError() {
    return {
      type: GET_QUESTION_ERROR
    };
  },
  loadQuestions(questions) {
    return {
      type: LOAD_QUESTIONS_REQUEST,
      questions
    };
  }
};
