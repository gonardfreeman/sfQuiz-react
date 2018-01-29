import { combineReducers } from 'redux';
import fetchQuestion from './question';
import chooseAnswer from './choser';
import attemptReducer from './attemptReducer';
import questionCountReducer from './questionCountReducer';
import goToQuestionReducer from './goToQuestionReducer';
import questionPullReducer from './questionPullReducer';

const rootReducer = combineReducers({
  fetchQuestion,
  chooseAnswer,
  attemptReducer,
  questionCountReducer,
  goToQuestionReducer,
  questionPullReducer,
});

export default rootReducer;
