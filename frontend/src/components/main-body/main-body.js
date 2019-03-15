import React, { Component } from 'react';
import "./main-body.css";
import CurrentlyWatch from './currentlyWatch/currentlyWatch';

class MainBody extends Component {
  render() {
    document.body.style.backgroundColor = "#303030";
    return (
     <div className = "mainpage-body">
       <CurrentlyWatch/>
     </div>
    );
  }
}

export default MainBody;
