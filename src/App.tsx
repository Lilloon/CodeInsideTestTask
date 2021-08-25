// eslint-disable-next-line no-use-before-define
import React from 'react';
import Header from './components/Header/Header'
import styles from './App.module.scss'
import Footer from './components/Footer/Footer'
import Routes from './components/Routes/Routes'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
