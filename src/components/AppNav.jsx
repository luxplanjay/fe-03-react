import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AppNav.css';

const PublicLinks = () => (
  <Fragment>
    <li>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.active}>
        login
      </NavLink>
    </li>
  </Fragment>
);

const PrivateLinks = () => (
  <Fragment>
    <li>
      <NavLink
        to="/logout"
        className={styles.link}
        activeClassName={styles.active}>
        logout
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/notes"
        className={styles.link}
        activeClassName={styles.active}>
        notes
      </NavLink>
    </li>
  </Fragment>
);

const AppNav = props => (
  <ul className={styles.list}>
    {props.isAuthenticated ? <PrivateLinks /> : <PublicLinks />}
  </ul>
);

export default AppNav;
