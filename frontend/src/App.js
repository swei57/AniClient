import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar';
import MainBody from './components/main-body/main-body';
import Page from './components/page/page';

class App extends Component {

  render() {
    return (
     <div className="holder">
        <Header />
      <div className="main-box">
        <SideBar />
        <div className="contents">
        <Page/>
        <MainBody/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
