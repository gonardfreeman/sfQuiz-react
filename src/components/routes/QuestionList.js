import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class QuestionList extends Component {
  render() {
    const { totalQuestions } = this.props;
    const questions = [...Array(+totalQuestions).keys()].map(item => {
      return (
        <li key={`question_${item}`}>
          <Link to={`/questions/${item + 1}`}>Question number {item + 1}</Link>
        </li>
      );
    });
    return <ul>{questions}</ul>;
  }
}

QuestionList.propTypes = {
  totalQuestions: PropTypes.number
};

function mapStateToProps(state) {
  const { totalQuestions } = state.fetchQuestion;
  return {
    totalQuestions
  };
}

export default connect(mapStateToProps)(QuestionList);
