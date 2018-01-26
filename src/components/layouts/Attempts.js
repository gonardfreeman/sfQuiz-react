import React, { Component } from 'react';
import { connect } from 'react-redux';

import attemptActions from '../../actions/atemptActions';

import '../../styles/Attempts.css';

class Attempts extends Component {
  constructor() {
    super();
    this.changeAttempt = this.changeAttempt.bind(this);
  }
  changeAttempt() {
    const { oneAttempt, oneAttemptAction, manyAttemptsAction } = this.props;

    if (oneAttempt) {
      manyAttemptsAction();
    } else {
      oneAttemptAction();
    }
  }
  render() {
    const { oneAttempt } = this.props;
    return (
      <div className="attempts">
        <label>
          <input
            type="checkbox"
            checked={oneAttempt}
            onChange={this.changeAttempt}
          />
          One attempt
        </label>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { oneAttempt } = state.attemptReducer;
  return {
    oneAttempt
  };
}

export default connect(mapStateToProps, {
  ...attemptActions
})(Attempts);
