import React, { Component } from 'react';
import "./main-body.css";
import CurrentlyWatch from './currentlyWatch/currentlyWatch';
import RecentlyUpdated from './recentlyUpdated/recentlyUpdated';
import Trending from './trending/trending';
import ScrollToTop from '../utils/scroll-to-top';

class MainBody extends Component {
  render() {
    document.body.style.backgroundColor = "#303030";
    return (
     <div className = "mainpage-body">
       <CurrentlyWatch/>
       <RecentlyUpdated/>
       <Trending/>
       <ScrollToTop/>
     </div>
    );
  }
}

export default MainBody;