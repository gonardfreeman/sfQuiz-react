import React, { Component } from 'react';
import { connect } from 'react-redux';

import Answers from './Answers';
import Attempts from '../layouts/Attempts';
import Handlers from '../handlers/Handlers';
import ClearResults from '../handlers/ClearResults';
import GoToQuestion from '../handlers/GoToQuestion';

import getQuestionAction from '../../actions/get_question';

import '../../styles/App.css';

class Question extends Component {
  componentWillMount() {
    const { random_number } = this.props;
    const { getQuestionRequest, getQuestionSuccess } = this.props;
    getQuestionRequest(random_number);
    getQuestionSuccess();
  }
  render() {
    const {
      question,
      random_number,
      question_fetched,
      answerCount,
      correctAnswerCount,
      total_questions
    } = this.props;
    if (question_fetched) {
      let questionText = '';
      question.forEach(item => {
        if (item.question) questionText += `${item[random_number]} `;
      });
      return (
        <div className="question">
          <div>
            Correct/Answered/Total: {correctAnswerCount}/{answerCount}/{
              total_questions
            }{' '}
          </div>
          <div className="wrapper">
            <h2>Question #{random_number}</h2>
            <div>{questionText}</div>
            <Answers />
          </div>
          <Handlers />
          <ClearResults />
          <GoToQuestion />
          <Attempts />
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

function mapStateToProps(state) {
  const { random_number, total_questions } = state.generateRandomNumber;
  const { question, question_fetched } = state.fetchQuestion;
  const { correctAnswerCount, answerCount } = state.questionCountReducer;
  return {
    random_number,
    question,
    question_fetched,
    correctAnswerCount,
    answerCount,
    total_questions
  };
}

export default connect(mapStateToProps, {
  ...getQuestionAction
})(Question);
