// eslint-disable-next-line no-use-before-define
import React from 'react';
import Header from './components/Header/Header'
import styles from './App.module.scss'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.body}>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
