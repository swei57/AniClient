import React, { Component } from 'react';
import './page.css';

class Page extends Component {
  render() {
    return (
      
     <div className = "pagination">
     <img className="invert pageButton" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" alt ="wife" />
     <img className="flip invert pageButton" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" alt ="wife"/>
     </div>
    );
  }
}

export default Page;
