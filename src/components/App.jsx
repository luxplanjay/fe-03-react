import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';
import NoteForm from './NoteForm';
import NotesListContainer from '../containers/NotesListContainer';
import styles from './App.css';
import { fetchNotes } from '../actions';
// import Balance from './Balance';
// import BalanceFormContainer from '../containers/BalanceFormContainer';

class App extends Component {
  componentDidMount() {
    this.props.onFetchNotes();
  }

  render() {
    // const { balance } = this.props;

    const { isLoading } = this.props;
    console.log('isLoading: ', isLoading);

    return (
      <div className={styles.app}>
        <div className={styles.form}>
          <NoteForm />
        </div>
        <div className={styles.list}>
          {isLoading ? <Loader /> : <NotesListContainer />}
        </div>

        {/* <Balance balance={balance} />
        <BalanceFormContainer /> */}
      </div>
    );
  }
}

const mSTP = state => ({
  isLoading: state.notes.isLoading,
});

const mDTP = dispatch => ({
  onFetchNotes: () => dispatch(fetchNotes()),
});

export default connect(mSTP, mDTP)(App);
