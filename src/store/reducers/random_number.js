import * as td from '../test_data.json';
import { count_q, getRandomInt } from '../../helpers/premod';

import {
  GENERATE_RANDOM_NUMBER,
  GET_TOTAL_QUESTIONS
} from '../../actions/get_random_numbers';

const defaultState = {
  random_number: 0,
  total_questions: 0,
};

export default function generateRandomNumber(state = defaultState, action) {
  switch (action.type) {
    case GENERATE_RANDOM_NUMBER:
      return Object.assign({}, state, {
        random_number: action.num === 0 ? getRandomInt(count_q(td)) : action.num
      });
    case GET_TOTAL_QUESTIONS:
      return Object.assign({}, state, {
        total_questions: count_q(td)
      });
    default:
      return state;
  }
}
