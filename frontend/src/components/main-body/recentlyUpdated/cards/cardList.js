import React, { Component } from 'react';
import Card from './cards';
import './cardList.css';

class CardList extends Component {

  constructor(props){
    super(props);
    this.state ={
library: [{
  name: 'Shield Hero',
  url: 'https://cdn.myanimelist.net/images/anime/1068/97169.jpg',
  id: 1
} , 
{
  name: 'My Hero Academia',
  url:  'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
  id: 2
},
{
  name: 'Naruto',
  url:'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
  id: 3
},
{
  name: 'Bleach',
  url:'https://cdn.myanimelist.net/images/anime/3/40451.jpg',
  id: 4
},
{
  name: 'Attack On Titan',
  url:'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
  id: 5
},
{
  name: 'Kayuya-Sama',
  url:'https://cdn.myanimelist.net/images/anime/1291/97023.jpg',
  id: 6
},
{
  name: 'Dororo',
  url:'https://cdn.myanimelist.net/images/anime/1933/97061.jpg',
  id: 7
}
,
{
  name: 'Mob Pyscho II',
  url:'https://cdn.myanimelist.net/images/anime/1918/96303.jpg',
  id: 8
},
{
  name: 'SAO',
  url: 'https://cdn.myanimelist.net/images/anime/11/39717.jpg',
  id: 9
},
{
  name: 'Cowboy Bebop',
  url:'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
  id:10
},
{
  name: 'Promised Neverland',
  url:'https://cdn.myanimelist.net/images/anime/1125/96929.jpg',
  id:11
},
{
  name: 'Your Lie in April',
  url:'https://cdn.myanimelist.net/images/anime/3/67177.jpg',
  id:12
},
{
  name: 'Made in Abyss',
  url:'https://cdn.myanimelist.net/images/anime/1922/91900.jpg',
  id:13
},
{
  name: 'Domestic Girlfriend',
  url:'https://cdn.myanimelist.net/images/anime/1021/95670.jpg',
  id:14
}],
  pageNumber: 1,
  currentAnimeVal: 0
  }
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

    const cardsArray = this.state.library.slice(this.state.currentAnimeVal,this.state.pageNumber* 10).map((anime) => {
        return(
          <Card name = {anime.name} imageURL = {anime.url} imageID = {anime.id}/>
        );
    });
    return (
    <div>
    <h4 className = "ml-4 mt-4">Recently Updated</h4>
    <hr></hr>
    <div className = "container-full allItems">   
      <div onClick = {this.clickedLeftComponent.bind(this)} className="arrowColumn">
      <img className="arrow invert" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" alt ="wife" />
      </div>
      <div className = "cardList">
       {cardsArray}
      </div>
      <div onClick = {this.clickedRightComponent.bind(this)} className = "arrowColumn">
      <img className="arrow flip invert" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" alt ="wife"/>
      </div>
      </div>
    </div>
    );
  }
}
export default  CardList;