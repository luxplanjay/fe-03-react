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
      };
    case types.ASYNC_ACTION_FAIL:
      return {
        ...state,
        isLoading: false,
        err: payload,
      };
    case types.FETCH_NOTES_SUCCESS:
      return {
        notes: payload,
        isLoading: false,
        err: null,
      };
    case types.DELETE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== payload.noteId),
        isLoading: false,
      };
    case types.ADD_NOTE_SUCCESS:
      return {
        ...state,
        notes: [...state.notes, payload.note],
        isLoading: false,
      };
    default:
      return state;
  }
}
