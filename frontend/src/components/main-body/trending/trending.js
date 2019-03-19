import React, { Component } from 'react';
import CardList from './cards/cardList';

class Trending extends Component {
  render() {
    return (
    <div>
      <h4 className = "ml-4 mt-4" id = "trending">Trending</h4>
      <hr></hr>
      <CardList/>
    </div>
    );
  }
}

export default Trending;
