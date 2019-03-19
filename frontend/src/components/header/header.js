import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './header.css';

class Header extends Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/mainwindow`} />
    }
  }

  render() {
    return (
     <div style ={{backgroundColor: '#272727'}}>
        <nav className="navbar navbar-dark ">
        {this.renderRedirect()}
        <span className="websiteTitle navbar-brand pt-3 pb-3 h1" onClick={this.setRedirect}>AniClient</span>
        </nav>
     </div>
    );
  }
}

export default Header;
