import React, { Component } from 'react';
import './cards.css';
import { Redirect } from 'react-router-dom';

class Card extends Component {
  state = {
    redirect: false,
    animeNames: [],
    showID:0
  }
  setRedirect = (e) => {
    this.setState({
      redirect: true,
      showID: e.target.id
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {

      return <Redirect to={`/show/${this.state.showID}`} />
    }
  }

  componentDidMount() {
    fetch('https://kitsu.io/api/edge/trending/anime?limit=20')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          animeNames: result.data
        })
        console.log(this.state.animeNames);
      },
      (error) => {
       console.log(error);
      }
    ) 
  }

  render() {
    const animeArray = this.state.animeNames.map((anime) => {
      return(
      <div>
      <p className = "animeTitle" >{anime.attributes.canonicalTitle}</p>
      <img onClick={this.setRedirect} className = "cards" alt = 'anime' src = {anime.attributes.posterImage.original} id = {anime.id}/>
      </div>
      );
    });

    return (
      <div className ="cList">
      {this.renderRedirect()}
      {animeArray}
      </div>
    );
  }
}
export default Card;