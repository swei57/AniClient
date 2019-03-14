import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar';
import Page from './components/page/page';
import MainBody from './components/main-body/main-body';

class App extends Component {
  render() {
    return (
     <div>
      <Header/>
      <SideBar/>
      <MainBody/>
     </div>
    );
  }
}

export default App;
