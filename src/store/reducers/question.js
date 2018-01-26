import {
  GET_QUESTION_REQUEST,
  GET_QUESTION_SUCCESS
} from '../../actions/get_question';
import {reduceQuestions} from '../../helpers/reduceQuestions';

import * as td from '../test_data.json';

const defaultState = {
  question: null,
  question_fetched: false,
  answers: null,
  regex: /^\+?-?\??/gm,
  rightAnswers: 0,
  td: reduceQuestions(td),
};




export default function fetchQuestion(state = defaultState, action) {
  switch (action.type) {
    case GET_QUESTION_REQUEST:
      const { random_number } = action;
      let random_question = [];
      let answers = [];
      let rightAnswers = 0;

      td.forEach(item => {
        if (+Object.keys(item)[0] === +random_number) {
          if (item.question) {
            random_question.push(item);
          } else {
            if (!item.hasOwnProperty('rightAnswer')) {
              if (
                item[random_number].match(state.regex)[0] === '+' ||
                item[random_number].match(state.regex)[0] === '+?'
              ) {
                item['rightAnswer'] = true;
                item[random_number] = item[random_number].replace(
                  state.regex,
                  ''
                );
                rightAnswers += 1;
              } else {
                item['rightAnswer'] = false;
                item[random_number] = item[random_number].replace(
                  state.regex,
                  ''
                );
              }
            } else {
              rightAnswers = state.rightAnswers;
            }
            answers.push(item);
          }
        }
      });

      return Object.assign({}, state, {
        question: random_question,
        answers: answers,
        question_fetched: false,
        rightAnswers: rightAnswers
      });
    case GET_QUESTION_SUCCESS:
      return Object.assign({}, state, {
        question_fetched: true
      });
    default:
      return state;
  }
}
