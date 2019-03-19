import React, { Component } from 'react';
import './search-page.css';
import Header from '../header/header';
import SideBar from '../sidebar/sidebar';
import Page from '../page/page';
import SearchBar from '../searchbar/searchbar';

class SearchPage extends Component {
    constructor(props) {
        super(props);
       this.state ={
        
       }
    }
    componentDidMount() {
       const searchText = this.props.match.params.searchText;
       console.log(searchText);
       console.log(this.props.location.state.found);
       console.log("hello");
    }
    

  render() {

    const animeArray = this.props.location.state.found.map((anime) => {
        return(
        <div>
        <p className = "animeTitle" >{anime.attributes.canonicalTitle}</p>
        <img className = "cards" alt = 'anime' src = {anime.attributes.posterImage.original} id = {anime.id}/>
        </div>
        );
      });

    return (
        <div className="holder">
        <Header />
      <div className="main-box">
        <SideBar />
        <div className="contents">
        <Page/>
        <SearchBar/> 

        <div className = "mainpage-body">
        <div>
       <div>
        <h4 className = "ml-4 mt-4" id = "searched">searched list</h4>
        <hr></hr>
        <div className = "container-full allItems">   
        <div className = "arrowColumn"></div>
        <div className ="cList">
        {animeArray}
        </div>
        <div className = "arrowColumn"></div>
        </div>
        </div>
       </div>
        </div>
    
        </div>
      </div>
    </div>
    );
  }
}

export default SearchPage;