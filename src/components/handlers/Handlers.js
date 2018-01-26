import React, { Component } from 'react';
import { connect } from 'react-redux';

import {getRandomInt} from '../../helpers/premod';

import getQuestionAction from '../../actions/getQuestion';
import choser from '../../actions/choose_answer_actions';
import answerChecker from '../../actions/checkAnswer';
import questionCountActions from '../../actions/questionCountActions';
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
      increaseAnswerCountAction,
      addQuestionToPull,
      questionPull,
      totalQuestions,
    } = this.props;
    const random_number = getRandomInt(totalQuestions, questionPull);
    getQuestion(random_number);
    addQuestionToPull(random_number);
    increaseAnswerCountAction();
    clearAnswers();
  }

  checkAnswer() {
    const {
      chosenAnswers,
      resetCheckerAction,
      answerCorrectAction,
      asnwerIncorrectAction,
      rightAnswers,
      answers,
      oneAttempt,
    } = this.props;
    if (oneAttempt) {
      resetCheckerAction();
      const correctPromise = new Promise((resolve, reject) => {
        if (+rightAnswers === +chosenAnswers.length) {
          chosenAnswers.every(chosenItem => {
            if (!answers[chosenItem].rightAnswer) {
              resolve(asnwerIncorrectAction());
              return false;
            }
            resolve(answerCorrectAction());
            return true;
          });
        } else {
          resolve(asnwerIncorrectAction());
        }
      });

      correctPromise.then(() => {
        const { answerCorrect, increaseCorrectCountAction } = this.props;

        if (answerCorrect) {
          increaseCorrectCountAction();
          alert('correct');
        } else {
          alert('wrong');
        }
        this.nextQuestion();
      });
    } else {
      resetCheckerAction();
      const correctPromise = new Promise((resolve, reject) => {
        if (+rightAnswers === +chosenAnswers.length) {
          chosenAnswers.every(chosenItem => {
            if (!answers[chosenItem].rightAnswer) {
              resolve(asnwerIncorrectAction());
              return false;
            } else {
              resolve(answerCorrectAction());
              return true;
            }
          });
        } else {
          resolve(asnwerIncorrectAction());
        }
      });

      correctPromise.then(() => {
        const { answerCorrect, increaseCorrectCountAction } = this.props;
        if (answerCorrect) {
          increaseCorrectCountAction();
          alert('correct');
        } else {
          alert('wrong');
        }
      });
    }
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
  const { answerCorrect } = state.checkerReducer;
  const {questionPull} = state.questionPullReducer;

  return {
    oneAttempt,
    chosenAnswers,
    rightAnswers,
    answers,
    answerCorrect,
    questionPull,
    totalQuestions
  };
}

export default connect(mapStateToProps, {
  ...getQuestionAction,
  ...choser,
  ...answerChecker,
  ...questionCountActions,
  ...questionPullActions
})(Handlers);
