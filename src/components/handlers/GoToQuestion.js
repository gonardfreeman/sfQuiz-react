import React, { Component } from 'react';
import { connect } from 'react-redux';

import inputActions from '../../actions/goToQuestionActions';
import getQuestionAction from '../../actions/get_question';
import generateActions from '../../actions/get_random_numbers';
import choser from '../../actions/choose_answer_actions';

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
    const genPromise = new Promise((resolve, reject) => {
      const { inputData, generateRandomNumber } = this.props;
      resolve(generateRandomNumber(+inputData));
    });
    genPromise.then(() => {
      const {
        getQuestionRequest,
        random_number,
        getQuestionSuccess,
        clearAnswers
      } = this.props;
      clearAnswers();
      getQuestionRequest(random_number);
      getQuestionSuccess();
    });
  }
  render() {
    const { goToQuestionInputAction, inputData } = this.props;
    return (
      <div className="goToQuestion">
        <label>
          <input
            type="text"
            pattern="[0-9]*"
            placeholder="Enter number of question"
            onChange={goToQuestionInputAction}
            value={+inputData !== 0 ? inputData : ''}
            onKeyPress={this.goToQuestionEnter}
          />
          <span>Go to question</span>
        </label>
        <button onClick={this.goToQuestion}>Go To Question</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { random_number } = state.generateRandomNumber;
  const { inputData } = state.goToQuestionReducer;
  return {
    inputData,
    random_number
  };
}

export default connect(mapStateToProps, {
  ...inputActions,
  ...getQuestionAction,
  ...generateActions,
  ...choser
})(GoToQuestion);
