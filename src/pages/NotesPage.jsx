import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteForm from '../components/NoteForm';
import NotesList from '../containers/NotesList';
import { fetchNotes } from '../actions';
import styles from './NotesPage.css';

class NotesPage extends Component {
  componentDidMount() {
    this.props.onFetchNotes();
  }

  render() {
    return (
      <div className={styles.content}>
        <NoteForm />
        <NotesList />
      </div>
    );
  }
}

const mDTP = dispatch => ({
  onFetchNotes: () => dispatch(fetchNotes()),
});

export default connect(null, mDTP)(NotesPage);
