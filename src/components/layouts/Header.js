import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import logo from '../../images/logo.svg';

import '../../styles/App.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Total questions {this.props.totalQuestions}
        </h1>
      </header>
    );
  }
}

Header.propTypes = {
  totalQuestions: PropTypes.number,
  questionPull: PropTypes.arrayOf(PropTypes.number)
};

function mapStateToProps(state) {
  const { totalQuestions } = state.fetchQuestion;
  const { questionPull } = state.questionPullReducer;
  return {
    totalQuestions,
    questionPull
  };
}

export default connect(mapStateToProps)(Header);
