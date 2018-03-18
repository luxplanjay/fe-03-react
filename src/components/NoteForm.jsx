import React, { Component } from 'react';
import './NoteForm.css';

export default class componentName extends Component {
  state = {
    title: '',
    text: '',
  };

  handleChange = (evt, type) => {
    const value = evt.target.value;

    switch (type) {
      case 'title':
        return this.setState({ title: value });
      case 'text':
        return this.setState({ text: value });
      default:
        return console.warn(`No case for event type "${type}"`);
    }
  };

  handleSubmit = evt => {
    evt.preventDefault();

    console.log(JSON.stringify(this.state));
  };

  render() {
    const { title, text } = this.state;

    return (
      <form className="NoteForm" onSubmit={this.handleSubmit}>
        <input
          className="NoteForm__input"
          type="text"
          placeholder="Note title"
          value={title}
          onChange={evt => this.handleChange(evt, 'title')}
        />
        <textarea
          className="NoteForm__textarea"
          placeholder="Note text"
          value={text}
          onChange={evt => this.handleChange(evt, 'text')}
        />
        <button className="NoteForm__btn">Add Note</button>
      </form>
    );
  }
}
