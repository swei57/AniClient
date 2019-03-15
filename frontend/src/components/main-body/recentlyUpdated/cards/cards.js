import React, { Component } from 'react';
import './cards.css';

class Card extends Component {

  render() {
    const {name, imageURL} = this.props;
    return (
        <div>
        <p>{name}</p>
        <img className = "cards" alt = 'anime' src = {imageURL}/>
        </div>
    );
  }
}
export default Card;