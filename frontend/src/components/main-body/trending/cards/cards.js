import React, { Component } from 'react';
import './cards.css';
import { Redirect } from 'react-router-dom';

class Card extends Component {
  state = {
    redirect: false,
    animeNames: []
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = (showID) => {
    if (this.state.redirect) {
      return <Redirect to={`/show/${showID}`} />
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
      <p className = "animeTitle">{anime.attributes.canonicalTitle}</p>
      <img className = "cards" alt = 'anime' src = {anime.attributes.posterImage.original}/>
      </div>
      );
    });

    return (
      <div className ="cList">{animeArray}</div>
    );
  }
}
export default Card;