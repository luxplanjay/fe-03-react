import React, { Component } from 'react';
import Loader from './Loader';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import NotesList from './NotesList';
import './App.css';

export default class App extends Component {
  state = {
    inputValue: 0,
  };

  handleInputChange = evt => {
    const value = evt.target.value;
    this.setState({ inputValue: Number(value) });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div>
        {/* <div className="App__form">
          <NoteForm />
        </div>
        <div className="App__list">
          <NotesList />
        </div> */}

        <h2>Account balance: 0$</h2>

        <div>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <button>Deposit</button>
          <button>Withdraw</button>
        </div>
      </div>
    );
  }
}
