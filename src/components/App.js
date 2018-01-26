import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Header from './layouts/Header';
import Question from './question/Question';

import configureStore from '../store/configureStore';
import { saveState } from '../helpers/localStorage';
import throttle from 'lodash/throttle';

const store = configureStore();
store.subscribe(
  throttle(() => {
    saveState({
      questionCountReducer: store.getState().questionCountReducer,
      attemptReducer: store.getState().attemptReducer
    });
  }, 1000)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Question />
        </div>
      </Provider>
    );
  }
}

export default App;
