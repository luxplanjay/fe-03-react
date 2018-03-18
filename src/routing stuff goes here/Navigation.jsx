import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const PublicLinks = (
  <Fragment>
    <li>
      <NavLink
        exact
        to="/"
        className="nav-link"
        activeClassName="nav-link-active">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/login"
        className="nav-link"
        activeClassName="nav-link-active">
        Login
      </NavLink>
    </li>
  </Fragment>
);

const PrivateLinks = (
  <Fragment>
    <li>
      <NavLink
        to="/topics"
        className="nav-link"
        activeClassName="nav-link-active">
        Topics
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/profile"
        className="nav-link"
        activeClassName="nav-link-active">
        Profile
      </NavLink>
    </li>
  </Fragment>
);

const Navigation = ({ isLoggedIn }) => (
  <ul className="nav">
    {PublicLinks}
    {isLoggedIn && PrivateLinks}
  </ul>
);

export default Navigation;
