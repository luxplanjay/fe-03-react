import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleware = [thunk];

const enhancer = composeWithDevTools(
  applyMiddleware(...middleware)
);

const store = createStore(reducers, {}, enhancer);

export default store;
