import React, { Component } from 'react';
import { connect } from 'react-redux';

import Answers from './Answers';
import Attempts from '../layouts/Attempts';
import Handlers from '../handlers/Handlers';
import ClearResults from '../handlers/ClearResults';
import GoToQuestion from '../handlers/GoToQuestion';

import getQuestionAction from '../../actions/getQuestion';
import questionPullActions from '../../actions/questionPullActions';

import {getRandomInt} from '../../helpers/premod';

import '../../styles/App.css';

class Question extends Component {
  componentWillMount() {
    const { 
      getQuestion, 
      totalQuestions, 
      addQuestionToPull,
      questionPull 
    } = this.props;
    const random = getRandomInt(totalQuestions, questionPull);
    getQuestion(random);
    addQuestionToPull(random);
  }
  render() {
    const {
      question,
      questionNumber,
      answerCount,
      correctAnswerCount,
      totalQuestions
    } = this.props;
    return (
      <div className="question">
        <div>
          Correct/Answered/Total: {correctAnswerCount}/{answerCount}/{totalQuestions}
        </div>
        <div className="wrapper">
          <h2>Question #{questionNumber}</h2>
          <div>{question}</div>
          <Answers />
        </div>
        <Handlers />
        <ClearResults />
        <GoToQuestion />
        <Attempts />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { question, question_fetched, totalQuestions, questionNumber } = state.fetchQuestion;
  const { correctAnswerCount, answerCount } = state.questionCountReducer;
  const {questionPull} = state.questionPullReducer;
  return {
    question,
    question_fetched,
    correctAnswerCount,
    answerCount,
    totalQuestions,
    questionNumber,
    questionPull,
  };
}

export default connect(mapStateToProps, {
  ...getQuestionAction,
  ...questionPullActions
})(Question);
