import React from 'react';

const LoginPage = ({ history, location, onLogIn, onLogOut }) => (
  <div>
    <h1>Login Page</h1>
    <button
      onClick={() => {
        onLogIn();

        const to = location.state ? location.state.from : '/';
        history.push(to);
      }}>
      Login
    </button>
    <button
      onClick={() => {
        onLogOut();

        history.push('/');
      }}>
      Logout
    </button>
  </div>
);

export default LoginPage;
