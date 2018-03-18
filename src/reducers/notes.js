import * as types from '../constants';

const initialState = {
  notes: [],
  isLoading: false,
  err: null,
};

export default function notes(state = initialState, { type, payload }) {
  switch (type) {
    case types.ASYNC_ACTION_START:
      return {
        ...state,
        isLoading: true,
        err: null,
      };
    case types.ASYNC_ACTION_FAIL:
      return {
        ...state,
        isLoading: false,
        err: payload,
      };
    case types.FETCH_NOTES_SUCCESS:
      return {
        ...state,
        notes: [...payload.notes],
        isLoading: false,
        err: null,
      };
    case types.DELETE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== payload.noteId),
        isLoading: false,
        err: null,
      };
    case types.ADD_NOTE_SUCCESS:
      return {
        ...state,
        notes: [...state.notes, payload.note],
        isLoading: false,
        err: null,
      };
    default:
      return state;
  }
}
