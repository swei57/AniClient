import React, { Component } from 'react';
import './searchbar.css';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            found: false,
            page:0,
            showName: '',
            foundShows: [],
          }
    }
    onSearchChange =(event) =>{
        this.setState({
            showName:event.target.value
        })
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=${this.state.showName}`)
            .then(res => res.json())
            .then(
            (result) => {
                console.log(result.data);
                this.setState({
                    foundShows: result.data
                })
                },
        (error) => {
        console.log(error);
        }
    ) 
    }

  render(){
    return(
        <div className = "p-2">
           <div className="test">
               <input className = "text-light searchbar" type = "search" 
               placeholder ="Search Anime "
               onChange =  {this.onSearchChange}></input> 
               <i className="searchIcon fas fa-search ml-3" aria-hidden="true"></i>
                {this.state.foundShows.slice(0,10).map((show) => (
                    <div className = "filterShow">
                    <a className="searchRes"href ={`/show/${show.id}`}>{show.attributes.canonicalTitle}</a>
                    </div>
                ))}
           </div>
        </div>
   );
  }
}


export default SearchBar;