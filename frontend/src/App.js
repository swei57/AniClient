import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar';
import MainBody from './components/main-body/main-body';
import SearchBar from './components/searchbar/searchbar';
import Page from './components/page/page';

class App extends Component {

  constructor(){
    super()
    this.state ={
      anime: {},
    searchfield: ''
    }
  }

  onSearchChange(event){
    console.log(event.target.value);
  }

  render() {
    return (
     <div className="holder">
        <Header />
      <div className="main-box">
        <SideBar />
        <div className="contents">
        <Page/>
        <SearchBar/>
        <MainBody/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
