import React, { Component } from 'react';
import { connect } from 'react-redux';

import getQuestionAction from '../../actions/get_question';
import generateActions from '../../actions/get_random_numbers';
import choser from '../../actions/choose_answer_actions';
import answerChecker from '../../actions/checkAnswer';
import questionCountActions from '../../actions/questionCountActions';

class Handlers extends Component {
  constructor(props) {
    super(props);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }
  nextQuestion() {
    const { generateRandomNumber } = this.props;

    const genPromise = new Promise((resolve, reject) => {
      resolve(generateRandomNumber());
    });

    genPromise.then(() => {
      const {
        getQuestionRequest,
        random_number,
        getQuestionSuccess,
        clearAnswers,
        increaseAnswerCountAction
      } = this.props;
      increaseAnswerCountAction();
      getQuestionRequest(random_number);
      getQuestionSuccess();
      clearAnswers();
    });
  }
  checkAnswer() {
    const {
      chosenAnswers,
      resetCheckerAction,
      answerCorrectAction,
      asnwerIncorrectAction,
      rightAnswers,
      answers,
      oneAttempt
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
  const { random_number } = state.generateRandomNumber;
  const { chosenAnswers } = state.chooseAnswer;
  const { rightAnswers, answers } = state.fetchQuestion;
  const { answerCorrect } = state.checkerReducer;

  return {
    random_number,
    oneAttempt,
    chosenAnswers,
    rightAnswers,
    answers,
    answerCorrect
  };
}

export default connect(mapStateToProps, {
  ...getQuestionAction,
  ...generateActions,
  ...choser,
  ...answerChecker,
  ...questionCountActions
})(Handlers);
