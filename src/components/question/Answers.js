import React, { Component } from 'react';
import { connect } from 'react-redux';

import choser from '../../actions/choose_answer_actions';

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
    const { 
      answers, 
      rightAnswers, 
      questionNumber, 
      chosenAnswers 
    } = this.props;

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

function mapStateToProps(state) {
  const { answers, rightAnswers, questionNumber } = state.fetchQuestion;
  const { chosenAnswers } = state.chooseAnswer;
  return {
    answers,
    rightAnswers,
    chosenAnswers,
    questionNumber,
  };
}

export default connect(mapStateToProps, {
  ...choser
})(Answers);
