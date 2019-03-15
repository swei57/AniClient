import React, { Component } from 'react';
import './cards.css';

class Card extends Component {

  render() {
    return (
        <div>
        <img className = "cards" alt = 'anime' src = "https://cdn.myanimelist.net/images/anime/1291/97023.jpg"/>
        </div>
    );
  }
}
export default Card;