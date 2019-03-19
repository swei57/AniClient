import React, { Component } from 'react';
import './searchbar.css';
import { Redirect } from 'react-router-dom';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            found: false,
            page:0,
            showName: '',
            foundShows: [],
            redirect: false,
          }
    }
    setRedirect = () => {
        this.setState({
          redirect: true,
        })
      }

    renderRedirect = () => {
    if (this.state.redirect) {
        return <Redirect to={{
            pathname:`/search/${this.state.showName}`,
            state:{found: this.state.foundShows}
        }} />;
    }
    }
    
    onSearchChange =(event) =>{
        this.setState({
            showName:event.target.value
        })
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=${this.state.showName}&page[limit]=20`)
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                    foundShows: result.data
                })
                },
        (error) => {
        console.log(error);
        }
    ) 
    }
    clearElements = () => {
        setTimeout(() => {
            this.setState({
                foundShows: []
            });
        }, 100)
    }

    handleKeyPress =(target) =>{
        if(target.charCode===13){
         this.setState({
            redirect: true
         }) 
        } 
      }

  render(){
    return(
        <div className = "p-2">
           <div className="test" onBlur = {this.clearElements} >
               <input className = "text-light searchbar" type = "search" 
               placeholder ="Search Anime "
               onChange =  {this.onSearchChange} onKeyPress={this.handleKeyPress} ></input> 
               {this.renderRedirect()}
               <i className="searchIcon fas fa-search ml-3" aria-hidden="true"></i>
                <div className="searchResults">
                {this.state.foundShows.slice(0,10).map((show) => (
                    <div className = "filterShow">
                    <a className="searchRes"href ={`/show/${show.id}`}>{show.attributes.canonicalTitle}</a>
                    </div>
                ))}
                </div>
                
           </div>
        </div>
   );
  }
}


export default SearchBar;