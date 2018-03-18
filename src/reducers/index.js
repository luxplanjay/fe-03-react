import { combineReducers } from 'redux';
// import balance from './balance';
import notes from './notes';

const rootReducer = combineReducers({
  notes,
});

export default rootReducer;
