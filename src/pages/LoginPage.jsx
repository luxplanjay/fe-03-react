import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignupForm from '../components/SignupForm';
import { auth } from '../actions';
import { getIsAuthenticated } from '../selectors';

const LoginPage = props => (
  <div>
    {props.isAuthenticated && <Redirect to="/notes" />}
    <SignupForm {...props} />
  </div>
);

const mSTP = state => ({
  isAuthenticated: getIsAuthenticated(state),
});
const mDTP = dispatch => ({
  onAuth(email, password, type) {
    dispatch(auth(email, password, type));
  },
});

export default connect(mSTP, mDTP)(LoginPage);
