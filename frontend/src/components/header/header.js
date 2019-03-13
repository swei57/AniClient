import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
     <div style ={{backgroundColor: '#303030'}}>
        <nav className="navbar navbar-dark ">
        <span className="navbar-brand pt-3 pb-3 h1">AniClient</span>
        </nav>
     </div>
    );
  }
}

export default Header;
