import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Helmet } from 'react-helmet';
// import { Redirect } from 'react-router-dom';

import Answers from './Answers';
import ControlBlock from './ControlBlock';

import getQuestionAction from '../../actions/getQuestion';
import questionPullActions from '../../actions/questionPullActions';

import { getRandomInt } from '../../helpers/premod';

import '../../styles/App.css';

class Question extends Component {
  componentWillMount() {
    const {
      getQuestion,
      totalQuestions,
      addQuestionToPull,
      questionPull,
      match
    } = this.props;

    if (match.path === '/questions/:id') {
      //solve validation with id as string
      //add redirect to random questions
      //possible solution to move all willmount func to render method
      //and rethink get question method
      const { id } = match.params;
      getQuestion(+id);
      addQuestionToPull(+id);
    } else {
      const randomNumber = getRandomInt(totalQuestions, questionPull);
      getQuestion(randomNumber);
      addQuestionToPull(randomNumber);
    }
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
        <Helmet>
          <title
          >{`Current Progress: ${correctAnswerCount}/${answerCount}/${totalQuestions} ----- SF Quiz`}</title>
        </Helmet>
        <div>
          Correct/Answered/Total: {correctAnswerCount}/{answerCount}/{
            totalQuestions
          }
        </div>
        <div className="wrapper">
          <h2>Question #{questionNumber}</h2>
          <div>{question}</div>
          <Answers />
        </div>
        <ControlBlock />
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.string,
  correctAnswerCount: PropTypes.number,
  answerCount: PropTypes.number,
  totalQuestions: PropTypes.number,
  questionNumber: PropTypes.number,
  questionPull: PropTypes.arrayOf(PropTypes.number),
  getQuestion: PropTypes.func,
  addQuestionToPull: PropTypes.func
};

function mapStateToProps(state) {
  const { question, totalQuestions, questionNumber } = state.fetchQuestion;
  const { correctAnswerCount, answerCount } = state.questionCountReducer;
  const { questionPull } = state.questionPullReducer;
  return {
    question,
    correctAnswerCount,
    answerCount,
    totalQuestions,
    questionNumber,
    questionPull
  };
}

export default connect(mapStateToProps, {
  ...getQuestionAction,
  ...questionPullActions
})(Question);
