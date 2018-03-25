import React, { Component } from 'react';
import styles from './SignupForm.css';

const FormButton = ({ cls, onClick, text, type }) => (
  <button
    className={cls}
    onClick={evt => {
      evt.preventDefault();
      onClick(type);
    }}>
    {text}
  </button>
);

export default class SignupForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = evt => {
    const value = evt.target.value;
    const type = evt.target.type;

    this.setState({ [type]: value });
  };

  handleFormSubmit = type => {
    const { email, password } = this.state;
    this.props.onAuth(email, password, type);
  };

  render() {
    const { email, password } = this.state;

    return (
      <form className={styles.form}>
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={this.handleInputChange}
          placeholder="Email"
          required
          autoFocus
        />
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={this.handleInputChange}
          placeholder="Password"
          required
        />
        <div className={styles.actions}>
          <FormButton
            cls={styles.button}
            onClick={this.handleFormSubmit}
            text="Sign Up"
            type="signup"
          />
          <FormButton
            cls={styles.button}
            onClick={this.handleFormSubmit}
            text="Log In"
            type="login"
          />
        </div>
      </form>
    );
  }
}
