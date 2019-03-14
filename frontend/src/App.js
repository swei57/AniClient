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
     <div>
      <Header/>
       <div className = "row">
      <div className = "col-5">
      <SideBar/>
      </div>
      <div className = "col-7">
      <Page/>
      <SearchBar searchChange = {this.onSearchChange}/>
      </div>
      </div>
      <MainBody/>
     </div>
    );
  }
}

export default App;
