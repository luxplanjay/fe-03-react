import * as types from '../constants';
import axios from 'axios';

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
  dispatch(asyncActionStart());

  axios
    .get('/notes')
    .then(response => dispatch(fetchNotesSuccess(response.data)))
    .catch(err => dispatch(asyncActionFail(err)));
};

// delete notes
const deleteNoteSuccess = noteId => ({
  type: types.DELETE_NOTE_SUCCESS,
  payload: { noteId },
});

export const deleteNote = noteId => dispatch => {
  dispatch(asyncActionStart());

  axios
    .delete(`/notes/${noteId}`)
    .then(
      ({ status, statusText }) =>
        status === 200
          ? dispatch(deleteNoteSuccess(noteId))
          : dispatch(
              asyncActionFail({ message: 'DELETE NOTE FAIL: ' + statusText }),
            ),
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

  axios
    .post(`/notes`, note)
    .then(
      ({ status, data }) =>
        status === 201
          ? dispatch(addNoteSuccess(data))
          : dispatch(asyncActionFail({ message: 'ADD NOTE FAIL' })),
    )
    .catch(err => dispatch(asyncActionFail(err)));
};
