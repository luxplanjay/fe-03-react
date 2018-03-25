import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './AppBar';
import LoginPage from '../pages/LoginPage';
import NotesPage from '../pages/NotesPage';
import LogoutPage from '../pages/LogoutPage';
import PrivateRoute from './PrivateRoute';
import { getIsAuthenticated } from '../selectors';
import { authCheckState } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.checkAuthState();
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <div>
        <AppBar />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <PrivateRoute
            path="/logout"
            component={LogoutPage}
            isAuthenticated={isAuthenticated}
            redirectTo="/"
          />
          <PrivateRoute
            path="/notes"
            component={NotesPage}
            isAuthenticated={isAuthenticated}
            redirectTo="/"
          />
        </Switch>
      </div>
    );
  }
}

export default connect(
  state => ({ isAuthenticated: getIsAuthenticated(state) }),
  dispatch => ({ checkAuthState: () => dispatch(authCheckState()) }),
)(App);
