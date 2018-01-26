import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { loadState } from '../helpers/localStorage';

export default function configureStore() {
  const presistedState = loadState();
  const middlewares = [];
  middlewares.push(thunk);
  if (process.env.NODE_ENV === 'development') {
    const {logger} = require('redux-logger');

    middlewares.push(logger);
  }
  const store = createStore(
    rootReducer,
    presistedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = require('./reducers');
      store.replaceRducer(nextRootReducer);
    });
  }
  return store;
}
