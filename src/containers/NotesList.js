import { connect } from 'react-redux';
import NotesList from '../components/NotesList';
import { deleteNote } from '../actions';
import { getAllNotes, getNotesIsLoading } from '../selectors';
import withLoader from '../hoc/withLoader';

const mSTP = state => ({
  notes: getAllNotes(state),
  isLoading: getNotesIsLoading(state),
});

const mDTP = dispatch => ({
  onDeleteNote: id => dispatch(deleteNote(id)),
});

export default connect(mSTP, mDTP)(withLoader(NotesList));
