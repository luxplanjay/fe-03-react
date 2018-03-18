import React, { Component } from 'react';

export default class BalanceForm extends Component {
  state = {
    inputValue: 0,
  };

  handleInputChange = evt => {
    const value = evt.target.value;
    this.setState({ inputValue: Number(value) });
  };

  render() {
    const { inputValue } = this.state;
    const { onDeposit, onWithdraw } = this.props;

    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={() => onDeposit(inputValue)}>Deposit</button>
        <button onClick={() => onWithdraw(inputValue)}>Withdraw</button>
      </div>
    );
  }
}
