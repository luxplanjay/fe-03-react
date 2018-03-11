import React, { Component } from 'react';

export default class CheckAuth extends Component {
  render() {
    const { children, isLoggedIn } = this.props;
    const message = isLoggedIn ? 'logged in!' : 'not logged in!';
    const val = isLoggedIn ? "200 ok" : "500 err";

    return children(message, val);
  }
}
