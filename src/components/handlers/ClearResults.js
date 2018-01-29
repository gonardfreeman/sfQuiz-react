import React, { Component } from 'react';
import { connect } from 'react-redux';

import countActions from '../../actions/checkAnswer';
import '../../styles/ClearResults.css';

class ClearResults extends Component {
  constructor() {
    super();
    this.clearResults = this.clearResults.bind(this);
  }
  clearResults() {
    const { clearResultsAction } = this.props;
    clearResultsAction();
  }
  render() {
    return (
        <button className="button" onClick={this.clearResults}>Clear Progress</button>
    );
  }
}

export default connect(null, {
  ...countActions
})(ClearResults);
