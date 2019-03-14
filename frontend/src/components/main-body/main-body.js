import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import "./main-body.css";
class MainBody extends Component {
  render() {
    document.body.style.backgroundColor = "#303030";
    return (
     <div className = "mainpage-body">
       main page
     </div>
    );
  }
}

export default MainBody;
