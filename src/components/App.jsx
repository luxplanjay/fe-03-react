import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './Navigation';
// import HomePage from './HomePage';
// import TopicsPage from './TopicsPage';
// import LoginPage from './LoginPage';
// import ProfilePage from './ProfilePage';
import PrivateRoute from './PrivateRoute';

import List from './List';
import Loader from './Loader';
import CheckAuth from './CheckAuth';

import LoadableComponent from './LoadableComponent';

const AsyncHome = LoadableComponent({
  loader: () => import(`./HomePage`),
  loading: Loader,
});

const AsyncTopics = LoadableComponent({
  loader: () => import(`./TopicsPage`),
  loading: Loader,
});

const AsyncLogin = LoadableComponent({
  loader: () => import(`./LoginPage`),
  loading: Loader,
});

const AsyncProfile = LoadableComponent({
  loader: () => import(`./ProfilePage`),
  loading: Loader,
});

export default class App extends Component {
  state = {
    data: [],
    isLoading: true,
    isLoggedIn: false,
  };

  logIn = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  logOut = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          data: [1, 2, 3, 4, 5],
          isLoading: false,
        }),
      1000,
    );
  }

  render() {
    const { isLoggedIn, data, isLoading } = this.state;

    return (
      <div>
        {/* <CheckAuth isLoggedIn={isLoggedIn}>
          {(msg, value) => <h1>{msg}, {value}</h1>}
        </CheckAuth> */}

        {/* <List isLoading={isLoading} items={data} /> */}

        <Navigation isLoggedIn={isLoggedIn} />

        <Switch>
          <Route exact path="/" component={AsyncHome} />
          <Route
            path="/login"
            render={props => (
              <AsyncLogin
                onLogIn={this.logIn}
                onLogOut={this.logOut}
                {...props}
              />
            )}
          />
          <PrivateRoute
            path="/topics"
            isAuthenticated={isLoggedIn}
            redirectTo="/login"
            component={AsyncTopics}
          />
          <PrivateRoute
            path="/profile"
            isAuthenticated={isLoggedIn}
            redirectTo="/login"
            component={AsyncProfile}
          />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    );
  }
}
