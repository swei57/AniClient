import React, { Component } from 'react';
import Card from './cards';
import './cardList.css';

class CardList extends Component {

  constructor(props){
    super(props);
    this.state ={
library: [{
  name: 'Shield Hero',
  url: 'https://cdn.myanimelist.net/images/anime/1068/97169.jpg'
} , 
{
  name: 'My Hero Academia',
  url:  'https://cdn.myanimelist.net/images/anime/10/78745.jpg'
},
{
  name: 'Naruto',
  url:'https://cdn.myanimelist.net/images/anime/13/17405.jpg'
},
{
  name: 'Bleach',
  url:'https://cdn.myanimelist.net/images/anime/3/40451.jpg'
},
{
  name: 'Attack On Titan',
  url:'https://cdn.myanimelist.net/images/anime/10/47347.jpg'
},
{
  name: 'Kayuya-Sama',
  url:'https://cdn.myanimelist.net/images/anime/1291/97023.jpg'
},
{
  name: 'Dororo',
  url:'https://cdn.myanimelist.net/images/anime/1933/97061.jpg'
}
,
{
  name: 'Mob Pyscho II',
  url:'https://cdn.myanimelist.net/images/anime/1918/96303.jpg'
},
{
  name: 'SAO',
  url: 'https://cdn.myanimelist.net/images/anime/11/39717.jpg'
},
{
  name: 'Cowboy Bebop',
  url:'https://cdn.myanimelist.net/images/anime/4/19644.jpg'
}]
  }
  }
  render() {

    const cardsArray = this.state.library.map((anime) => {
        return(
          <Card name = {anime.name} imageURL = {anime.url}/>
        );
    });
    return (
    <div>
    <h4 className = "ml-4 mt-4">Currently Watching</h4>
    <hr></hr>
    <div className = "container-full allItems">   
      <img className="arrow invert" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" alt ="wife" />
      <div className = "cardList">
       {cardsArray}
      </div>
      <img className="arrow flip invert" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" alt ="wife"/>
      </div>
    </div>
    );
  }
}
export default  CardList;