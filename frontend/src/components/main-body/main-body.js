import React, { Component } from 'react';
import "./main-body.css";
import CurrentlyWatch from './currentlyWatch/currentlyWatch';
import RecentlyUpdated from './recentlyUpdated/recentlyUpdated';
import Trending from './trending/trending';

class MainBody extends Component {
  render() {
    document.body.style.backgroundColor = "#303030";
    return (
     <div className = "mainpage-body">
       <CurrentlyWatch/>
       <RecentlyUpdated/>
       <Trending/>
     </div>
    );
  }
}

export default MainBody;