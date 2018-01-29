import React, { Component } from 'react';
import { connect } from 'react-redux';

import {getRandomInt} from '../../helpers/premod';

import getQuestionAction from '../../actions/getQuestion';
import choser from '../../actions/choose_answer_actions';
import answerChecker from '../../actions/checkAnswer';
import questionPullActions from '../../actions/questionPullActions';

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
      checkAnswer,
      addQuestionToPull,
      questionPull,
      totalQuestions,
    } = this.props;
    const random_number = getRandomInt(totalQuestions, questionPull);
    getQuestion(random_number);
    addQuestionToPull(random_number);
    checkAnswer(false);
    clearAnswers();
  }

  checkAnswer() {
    const {
      checkAnswer,
      oneAttempt,
      chosenAnswers,
      rightAnswers,
      answers,
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
    correct ? alert('correct') : alert('wrong');
    if (oneAttempt) {
      checkAnswer(correct);
      this.nextQuestion();
      return;
    };
    checkAnswer(correct);
  }
  render() {
    const { oneAttempt } = this.props;
    if (oneAttempt) {
      return (
        <div className="button-block">
          <button onClick={this.checkAnswer}>Check answer and go next</button>
        </div>
      );
    }
    return (
      <div className="button-block">
        <button onClick={this.checkAnswer}>Check answer</button>
        <button onClick={this.nextQuestion}>Next question</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { oneAttempt } = state.attemptReducer;
  const { chosenAnswers } = state.chooseAnswer;
  const { rightAnswers, answers, totalQuestions } = state.fetchQuestion;
  const {questionPull} = state.questionPullReducer;

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
