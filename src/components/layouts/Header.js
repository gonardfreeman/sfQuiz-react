import React, { Component } from 'react';

import { connect } from 'react-redux';

import logo from '../../images/logo.svg';

import '../../styles/App.css';
import '../../styles/Lightspeed.css';

import generateActions from '../../actions/get_random_numbers';

class Header extends Component {
  componentWillMount() {
    const { generateRandomNumber, getTotalQuestions } = this.props;
    generateRandomNumber();
    getTotalQuestions();
  }
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Total questions {this.props.total_questions}
        </h1>
      </header>
    );
  }
}

function mapStateToProps(state) {
  const { random_number, total_questions } = state.generateRandomNumber;
  return {
    random_number,
    total_questions
  };
}

export default connect(mapStateToProps, generateActions)(Header);
