import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/login/login';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((  <BrowserRouter>
  <div>
  <Route exact path="/login" component={Login} />
  <Route exact path="/" component={App} />
  </div>
</BrowserRouter>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
