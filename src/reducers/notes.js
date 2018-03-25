import { combineReducers } from 'redux';
import * as types from '../constants';

function itemsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_NOTES_SUCCESS:
      return payload.notes;

    case types.DELETE_NOTE_SUCCESS:
      return state.filter(note => note.id !== payload.noteId);

    case types.ADD_NOTE_SUCCESS:
      return [...state, payload.note];

    default:
      return state;
  }
}

function isLoadingReducer(state = false, { type }) {
  switch (type) {
    case types.ASYNC_ACTION_START:
      return true;
    case types.ASYNC_ACTION_FAIL:
    case types.ADD_NOTE_SUCCESS:
    case types.FETCH_NOTES_SUCCESS:
    case types.DELETE_NOTE_SUCCESS:
      return false;
    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.ASYNC_ACTION_FAIL:
      return payload;
    case types.ASYNC_ACTION_START:
    case types.FETCH_NOTES_SUCCESS:
    case types.DELETE_NOTE_SUCCESS:
    case types.ADD_NOTE_SUCCESS:
      return null;
    default:
      return state;
  }
}

export default combineReducers({
  items: itemsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});
