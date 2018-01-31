import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import choser from '../../actions/chooseAnswerActions';

import '../../styles/Answer.css';

class Answers extends Component {
  constructor() {
    super();
    this.chooseAnswer = this.chooseAnswer.bind(this);
  }
  chooseAnswer(e) {
    if (e.currentTarget.type === 'checkbox') {
      if (!e.currentTarget.checked) {
        this.props.unchooseAnswer(+e.currentTarget.id);
      } else {
        this.props.chooseAnswer(+e.currentTarget.id);
      }
    } else {
      this.props.clearAnswers();
      this.props.chooseAnswer(+e.currentTarget.id);
    }
  }
  render() {
    const { answers, rightAnswers, questionNumber, chosenAnswers } = this.props;

    const answer = answers.map((item, index) => (
      <li key={index}>
        <label>
          <input
            type={rightAnswers > 1 ? 'checkbox' : 'radio'}
            name={rightAnswers > 1 ? `answer_${index}` : `radio_answer`}
            onChange={this.chooseAnswer}
            id={index}
            checked={~chosenAnswers.indexOf(index)}
          />
          {item[questionNumber]}
        </label>
      </li>
    ));
    return <ul className="answers">{answer}</ul>;
  }
}

Answers.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object),
  rightAnswers: PropTypes.number,
  chosenAnswers: PropTypes.arrayOf(PropTypes.number),
  questionNumber: PropTypes.number,
  chooseAnswer: PropTypes.func,
  unchooseAnswer: PropTypes.func,
  clearAnswers: PropTypes.func
};

function mapStateToProps(state) {
  const { answers, rightAnswers, questionNumber } = state.fetchQuestion;
  const { chosenAnswers } = state.chooseAnswer;
  return {
    answers,
    rightAnswers,
    chosenAnswers,
    questionNumber
  };
}

export default connect(mapStateToProps, {
  ...choser
})(Answers);
