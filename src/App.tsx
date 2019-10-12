import React from 'react';
import logo from './logo.svg';
import CounterCon from './containers/CounterCon'
import * as styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <CounterCon/>
      </header>
    </div>
  );
}

export default App;
