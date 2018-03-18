import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';

const middleware = [thunk, logger];

const enhancer = composeWithDevTools(
  applyMiddleware(...middleware)
);

const store = createStore(reducers, {}, enhancer);

export default store;
