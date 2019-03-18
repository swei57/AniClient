import React, { Component } from 'react';
import "./main-body.css";
import CurrentlyWatch from './currentlyWatch/currentlyWatch';
import RecentlyUpdated from './recentlyUpdated/recentlyUpdated';
import Trending from './trending/trending';
import SearchBar from '../searchbar/searchbar';

class MainBody extends Component {

  constructor(){
    super()
    this.state ={
      anime: [],
    searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://kitsu.io/api/edge/trending/anime?limit=100')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          anime: result.data
        })
      },
      (error) => {
       console.log(error);
      }
    ) 
  }


  onSearchChange= (event) =>{
    this.setState({
      searchfield: event.target.value
    });
  }

  render() {

    const filteredAnime = this.state.anime.filter(singleAnime => {
      return singleAnime.attributes.canonicalTitle.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    
    document.body.style.backgroundColor = "#303030";
    return (
     <div className = "mainpage-body">
       <SearchBar searchChange = {this.onSearchChange}/>
       <CurrentlyWatch/>
       <RecentlyUpdated/>
       <Trending  trendingAnime = {filteredAnime}/>
     </div>
    );
  }
}

export default MainBody;
