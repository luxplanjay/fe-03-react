import React from 'react';
import Logo from './Logo';
import AppNav from '../containers/AppNav';
import styles from './AppBar.css';

const AppBar = () => (
  <header className={styles.appbar}>
    <div className={styles.container}>
      <Logo text="Notes App" />
      <AppNav />
    </div>
  </header>
);

export default AppBar;
