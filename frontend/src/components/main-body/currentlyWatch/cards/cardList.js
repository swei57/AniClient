import React, { Component } from 'react';
import Card from './cards';
import './cardList.css';

class CardList extends Component {

  render() {
    return (
      <div className = "container-full allItems">   
      <img className="arrow invert" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" alt ="wife" />
      <div className = "cardList">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <img className="arrow flip invert" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" alt ="wife"/>
      </div>
    );
  }
}
export default  CardList;