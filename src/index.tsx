// eslint-disable-next-line no-use-before-define
import React from 'react';
import { CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import './index.scss'
import store from './store/store'

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </CookiesProvider>,
  document.getElementById('root'),
);
