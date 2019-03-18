import React, { Component } from 'react';
import CardList from './cards/cardList';

class Trending extends Component {
  render() {
    const {trendingAnime} = this.props;
    return (
     <div>
     <CardList filteredAnime = {trendingAnime}/>
     </div>
    );
  }
}

export default Trending;
