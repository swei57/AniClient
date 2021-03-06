import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/login/login';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import InfoPage from './components/info-page/info-page';
import SearchPage from './components/search-page/search-page';

ReactDOM.render((  <BrowserRouter>
  <div>
    <Route exact path="/" component={Login} />
    <Route exact path="/mainwindow" component={App} />
    <Route exact path="/show/:id" component={InfoPage} />
    <Route exact path="/show/:id/:epNo" component={InfoPage} />
    <Route exact path="/search/:searchText" component={SearchPage} />
  </div>
</BrowserRouter>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
