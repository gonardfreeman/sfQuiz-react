import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRandomInt } from '../../helpers/premod';

import getQuestionAction from '../../actions/getQuestion';
import choser from '../../actions/chooseAnswerActions';
import answerChecker from '../../actions/checkAnswer';
import questionPullActions from '../../actions/questionPullActions';

import '../../styles/buttons.css';

class Handlers extends Component {
  constructor(props) {
    super(props);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }
  nextQuestion() {
    const {
      getQuestion,
      clearAnswers,
      addQuestionToPull,
      questionPull,
      totalQuestions,
      skipQuestion,
      oneAttempt
    } = this.props;
    const random_number = getRandomInt(totalQuestions, questionPull);
    getQuestion(random_number);
    addQuestionToPull(random_number);
    if (!oneAttempt) {
      skipQuestion();
    }
    clearAnswers();
  }

  checkAnswer() {
    const {
      checkAnswer,
      oneAttempt,
      chosenAnswers,
      rightAnswers,
      answers,
      skipQuestion
    } = this.props;
    let correct = false;
    if (+rightAnswers === +chosenAnswers.length) {
      chosenAnswers.every(chosenItem => {
        if (answers[chosenItem].rightAnswer) {
          correct = true;
          return true;
        }
        correct = false;
        return false;
      });
    }
    if (correct) {
      checkAnswer(correct);
      alert('correct');
    } else {
      alert('wrong');
    }

    if (oneAttempt) {
      skipQuestion();
      this.nextQuestion();
    }
  }
  render() {
    const { oneAttempt } = this.props;
    if (oneAttempt) {
      return (
        <div className="button-block">
          <button className="button-together" onClick={this.checkAnswer}>
            Check answer and go next
          </button>
        </div>
      );
    }
    return (
      <div className="button-block">
        <button className="button" onClick={this.checkAnswer}>
          Check answer
        </button>
        <button className="button" onClick={this.nextQuestion}>
          Next question
        </button>
      </div>
    );
  }
}

Handlers.propTypes = {
  oneAttempt: PropTypes.bool,
  chosenAnswers: PropTypes.arrayOf(PropTypes.number),
  rightAnswers: PropTypes.number,
  answers: PropTypes.arrayOf(PropTypes.object),
  totalQuestions: PropTypes.number,
  questionPull: PropTypes.arrayOf(PropTypes.number),
  getQuestion: PropTypes.func,
  clearAnswers: PropTypes.func,
  checkAnswer: PropTypes.func,
  skipQuestion: PropTypes.func,
  addQuestionToPull: PropTypes.func
};

function mapStateToProps(state) {
  const { oneAttempt } = state.attemptReducer;
  const { chosenAnswers } = state.chooseAnswer;
  const { rightAnswers, answers, totalQuestions } = state.fetchQuestion;
  const { questionPull } = state.questionPullReducer;

  return {
    oneAttempt,
    chosenAnswers,
    rightAnswers,
    answers,
    questionPull,
    totalQuestions
  };
}

export default connect(mapStateToProps, {
  ...getQuestionAction,
  ...choser,
  ...answerChecker,
  ...questionPullActions
})(Handlers);
