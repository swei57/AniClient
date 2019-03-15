import React, { Component } from 'react';
import Card from './cards';
import './cardList.css';

class CardList extends Component {

  constructor(props){
    super(props);
    this.setState({
      pageNumber: 1,
      currentAnimeVal: 0
    })
  }

  clickedRightComponent = () => {
    if(this.state.library.slice(this.state.currentAnimeVal,this.state.pageNumber* 10).length === 10){
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


    return (
    <div>
    <h4 className = "ml-4 mt-4">Trending</h4>
    <hr></hr>
    <div className = "container-full allItems">   
      <div onClick = {this.clickedLeftComponent.bind(this)} className="arrowColumn">
      <img className="arrow invert" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" alt ="wife" />
      </div>
      <Card/>
      <div onClick = {this.clickedRightComponent.bind(this)} className = "arrowColumn">
      <img className="arrow flip invert" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" alt ="wife"/>
      </div>
      </div>
    </div>
    );
  }
}
export default  CardList;