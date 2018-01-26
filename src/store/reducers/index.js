import { combineReducers } from 'redux';
import generateRandomNumber from './random_number';
import fetchQuestion from './question';
import chooseAnswer from './choser';
import checkerReducer from './answerChecker';
import attemptReducer from './attemptReducer';
import questionCountReducer from './questionCountReducer';
import goToQuestionReducer from './goToQuestionReducer';

const rootReducer = combineReducers({
  generateRandomNumber,
  fetchQuestion,
  chooseAnswer,
  checkerReducer,
  attemptReducer,
  questionCountReducer,
  goToQuestionReducer
});

export default rootReducer;
