import { connect } from 'react-redux';
import NotesList from '../components/NotesList';
import { deleteNote } from '../actions';

const mSTP = state => ({
  notes: state.notes.notes,
});

const mDTP = dispatch => ({
  onDeleteNote: id => dispatch(deleteNote(id)),
});

export default connect(mSTP, mDTP)(NotesList);
