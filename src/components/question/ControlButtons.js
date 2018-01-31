import React, { Component } from 'react';

import Handlers from '../handlers/Handlers';
import ClearResults from '../handlers/ClearResults';
import ResetPull from '../handlers/ResetPull';

export default class ControlButtons extends Component {
  render() {
    return (
      <div>
        <Handlers />
        <div className="button-block">
          <ClearResults />
          <ResetPull />
        </div>
      </div>
    );
  }
}
