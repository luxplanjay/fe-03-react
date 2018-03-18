import * as types from '../constants';
import api from '../fakeAPI';

// common async
const asyncActionStart = () => ({
  type: types.ASYNC_ACTION_START,
});

const asyncActionFail = err => ({
  type: types.ASYNC_ACTION_FAIL,
  payload: err,
});

// fetch notes
const fetchNotesSuccess = notes => ({
  type: types.FETCH_NOTES_SUCCESS,
  payload: { notes },
});

export const fetchNotes = () => dispatch => {
  // fetch().then(data => dispatch({}))

  dispatch(asyncActionStart());

  api
    .getNotes()
    .then(notes => dispatch(fetchNotesSuccess(notes)))
    .catch(err => dispatch(asyncActionFail(err)));
};

// delete notes
const deleteNoteSuccess = noteId => ({
  type: types.DELETE_NOTE_SUCCESS,
  payload: { noteId },
});

export const deleteNote = noteId => dispatch => {
  dispatch(asyncActionStart());

  api
    .deleteNote(noteId)
    .then(
      ({ status }) =>
        status === 200
          ? dispatch(deleteNoteSuccess(noteId))
          : dispatch(asyncActionFail({ message: 'DELETE NOTE FAIL' })),
    )
    .catch(err => dispatch(asyncActionFail(err)));
};

// add note
const addNoteSuccess = note => ({
  type: types.ADD_NOTE_SUCCESS,
  payload: { note },
});

export const addNote = note => dispatch => {
  dispatch(asyncActionStart());

  api
    .addNote(note)
    .then(
      ({ status, newNote }) =>
        status === 200
          ? dispatch(addNoteSuccess(newNote))
          : dispatch(asyncActionFail({ message: 'ADD NOTE FAIL' })),
    )
    .catch(err => dispatch(asyncActionFail(err)));
};
