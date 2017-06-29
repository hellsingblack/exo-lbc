import { applyMiddleware, createStore } from "redux"

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducers from "../reducers";

const logger = createLogger({
  collapsed: true,
});

const middlewares = [
  promise(),
  thunk,
  logger,
];

const LOCAL = 'local';
const env = process.env.NODE_ENV || LOCAL;

const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(...middlewares),
  );

  if (env === LOCAL && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;
