import React, { Component } from 'react';
import './cards.css';
import { Redirect } from 'react-router-dom';

class Card extends Component {
  // The state variables of the card object
  state = {
    redirect: false,
    animeNames: [],
    showID:0,
    pageNumber: 1,
    currentAnimeVal: 0
  }

  setRedirect = (e) => {
    this.setState({
      redirect: true,
      showID: e.target.id
    })
  }

  // Redirect to the info-page for the showID.
  renderRedirect = () => {
    if (this.state.redirect) {

      return <Redirect to={`/show/${this.state.showID}`} />
    }
  }

  // Fetch the top 100 trending anime from kitsu, store their names in the animeNames array
  componentDidMount() {
    fetch('https://kitsu.io/api/edge/trending/anime?limit=100')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          animeNames: result.data
        })
      },
      (error) => {
       console.log(error);
      }
    ) 
  }

  clickedRightComponent = () => {
    if(this.state.animeNames.slice((this.state.currentAnimeVal + 10),(this.state.pageNumber+1)* 10).length === 10){
      this.setState({
        pageNumber: this.state.pageNumber + 1,
        currentAnimeVal: this.state.currentAnimeVal + 10
      });
    }
  }
  clickedLeftComponent = () => {
    if(this.state.pageNumber !== 1){
      this.setState({
        pageNumber: this.state.pageNumber - 1,
        currentAnimeVal: this.state.currentAnimeVal - 10
      });
    }
  }


  render() {
    
    const animeArray = this.state.animeNames.slice(this.state.currentAnimeVal, this.state.pageNumber * 10).map((anime) => {
      return(
      <div>
      <p className = "animeTitle" >{anime.attributes.canonicalTitle}</p>
      <img onClick={this.setRedirect} className = "cards" alt = 'anime' src = {anime.attributes.posterImage.original} id = {anime.id}/>
      </div>
      );
    });

    return (   
      <div className = "container-full allItems">   

    <div onClick = {this.clickedLeftComponent.bind(this)}  className="arrowColumn">
    <img className="arrow invert" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" alt ="wife" />
    </div>

      <div className ="cList">
      {this.renderRedirect()}
      {animeArray}
      </div>

      <div  onClick = {this.clickedRightComponent.bind(this)} className = "arrowColumn">
      <img className="arrow flip invert" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" alt ="wife"/>
      </div>

      </div>
    );
  }
}
export default Card;