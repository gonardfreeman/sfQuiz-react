import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import inputActions from '../../actions/goToQuestionActions';
import getQuestionAction from '../../actions/getQuestion';
import choser from '../../actions/chooseAnswerActions';

import '../../styles/GoToQuestion.css';

class GoToQuestion extends Component {
  constructor() {
    super();
    this.goToQuestion = this.goToQuestion.bind(this);
    this.goToQuestionEnter = this.goToQuestionEnter.bind(this);
  }
  goToQuestionEnter(evt) {
    if (evt.key === 'Enter') {
      this.goToQuestion();
    }
  }
  goToQuestion() {
    const { inputData, clearAnswers, getQuestion, totalQuestions } = this.props;
    if (+inputData > totalQuestions) {
      return false;
    }
    getQuestion(inputData);
    clearAnswers();
  }
  render() {
    const { validateAndGo, inputData } = this.props;
    return (
      <div className="goToQuestion">
        <label>
          <input
            type="text"
            pattern="[0-9]*"
            placeholder="Enter number of question"
            className="goToQuestion-input"
            onChange={validateAndGo}
            value={+inputData !== 0 ? inputData : ''}
            onKeyPress={this.goToQuestionEnter}
          />
          <span>Go to question</span>
        </label>
        <div className="button-block">
          <button className="button go-to-question" onClick={this.goToQuestion}>
            Go To Question
          </button>
        </div>
      </div>
    );
  }
}

GoToQuestion.propTypes = {
  inputData: PropTypes.number,
  totalQuestions: PropTypes.number,
  getQuestion: PropTypes.func,
  validateAndGo: PropTypes.func,
  clearAnswers: PropTypes.func
};

function mapStateToProps(state) {
  const { inputData } = state.goToQuestionReducer;
  const { totalQuestions } = state.fetchQuestion;
  return {
    inputData,
    totalQuestions
  };
}

export default connect(mapStateToProps, {
  ...inputActions,
  ...getQuestionAction,
  ...choser
})(GoToQuestion);
