import { ONE_ATTEMPT, MANY_ATTEMPS } from '../../actions/atemptActions';

const defaultState = {
  oneAttempt: false
};

export default function attemptReducer(state = defaultState, action) {
  switch (action.type) {
    case ONE_ATTEMPT:
      return Object.assign({}, state, {
        oneAttempt: true
      });
    case MANY_ATTEMPS:
      return Object.assign({}, state, {
        oneAttempt: false
      });
    default:
      return state;
  }
}
