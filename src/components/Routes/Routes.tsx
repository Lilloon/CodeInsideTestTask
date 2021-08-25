// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styles from './Routes.module.scss'
import Content from '../Content/Content'
import LoginScreen from '../LoginScreen/LoginScreen'
import About from '../About/About'

function Routes() {
  return (
    <div className={styles.body}>
      <Switch>
        <Route exact path="/">
          <Content />
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/about">
          <About />
        </Route>

      </Switch>
    </div>
  );
}

export default Routes;
