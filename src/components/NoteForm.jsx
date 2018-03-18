import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import styles from './NoteForm.css';

class NoteForm extends Component {
  state = {
    title: '',
    text: '',
  };

  handleChange = (evt, type) => {
    const value = evt.target.value;

    // Guard Clause
    if (!(type in this.state)) {
      console.warn(`No case for event type "${type}"`);
      return;
    }

    this.setState({
      [type]: value,
    });

    // switch (type) {
    //   case 'title':
    //     return this.setState({ title: value });
    //   case 'text':
    //     return this.setState({ text: value });
    //   default:
    //     return console.warn(`No case for event type "${type}"`);
    // }
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onAddNote({
      title: this.state.title,
      text: this.state.text,
    });
  };

  render() {
    const { title, text } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Note title"
          value={title}
          onChange={evt => this.handleChange(evt, 'title')}
        />
        <textarea
          className={styles.textarea}
          placeholder="Note text"
          value={text}
          onChange={evt => this.handleChange(evt, 'text')}
        />
        <button className={styles.button}>Add Note</button>
      </form>
    );
  }
}

const mDPT = dispatch => ({
  onAddNote: note => dispatch(addNote(note)),
});

export default connect(null, mDPT)(NoteForm);
