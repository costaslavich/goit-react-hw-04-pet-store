import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './Components/App';
import './index.css';

ReactDOM.render(
  <HashRouter basename="/">
    <Route component={App} />
  </HashRouter>,
  document.getElementById('root'),
);
