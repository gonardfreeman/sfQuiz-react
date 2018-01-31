import React, { Component } from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';

import { ConnectedRouter, routerMiddleware } from 'react-router-redux/es';
import createHistory from 'history/createBrowserHistory';

import MainPage from './routes/MainPage';
import QuestionList from './routes/QuestionList';

import Header from './layouts/Header';
import Question from './question/Question';

import configureStore from '../store/configureStore';
import { saveState } from '../helpers/localStorage';
import throttle from 'lodash/throttle';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = configureStore(middleware);
store.subscribe(
  throttle(() => {
    saveState({
      questionCountReducer: store.getState().questionCountReducer,
      attemptReducer: store.getState().attemptReducer,
      questionPullReducer: store.getState().questionPullReducer
    });
  }, 1000)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Header />
            <Route exact path="/" component={MainPage} />
            <Route exact path="/questions" component={QuestionList} />
            <Route exact path="/questions/:id" component={Question} />
            <Route path="/random_question" component={Question} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
