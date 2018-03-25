import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authLogout } from '../actions';

class LogoutPage extends Component {
  componentDidMount() {
    this.props.onLogout();
  }
  render() {
    return <Redirect to="/" />;
  }
}

const mDTP = dispatch => ({
  onLogout() {
    dispatch(authLogout());
  },
});

export default connect(null, mDTP)(LogoutPage);
