import React, { Component } from 'react';
import Card from './cards';
import './cardList.css';

class CardList extends Component {

  render() {
    const {filteredAnime} = this.props;
    console.log(filteredAnime); 

    return (
    <div>
    <h4 className = "ml-4 mt-4" id = "trending">Trending</h4>
    <hr></hr>
      <Card anime = {filteredAnime}/>
    </div>
    );
  }
}
export default  CardList;