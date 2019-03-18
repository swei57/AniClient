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
           {/* <img src="https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg" alt=""/> */}
           <div className="test">
               <input className = "text-light searchbar" type = "search" 
               placeholder ="search anime "
               onChange =  {this.onSearchChange}></input> 
               <i className="searchIcon fas fa-search ml-3" aria-hidden="true"></i>
                {this.state.foundShows.slice(0,5).map((show) => (
                    <div className = "filterShow">
                    <a href ={`/show/${show.id}`}>{show.attributes.canonicalTitle}</a>
                    </div>
                ))}
           </div>
        </div>
   );
  }
}


export default SearchBar;