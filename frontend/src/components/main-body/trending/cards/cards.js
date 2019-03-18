import React, { Component } from 'react';
import './cards.css';
import { Redirect } from 'react-router-dom';

class Card extends Component {
  state = {
    redirect: false,
    showID:0,
    pageNumber: 1,
    currentAnimeVal: 0
  }
  setRedirect = (e) => {
    this.setState({
      redirect: true,
      showID: e.target.id
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {

      return <Redirect to={`/show/${this.state.showID}`} />
    }
  }
 
  clickedRightComponent = () => {
    if(this.props.anime.slice((this.state.currentAnimeVal + 10),(this.state.pageNumber+1)* 10).length > 0){
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
    const {anime} = this.props;
    console.log(anime);

    const animeArray = anime.slice(this.state.currentAnimeVal, this.state.pageNumber * 10).map((anime) => {
      return(
      <div>
      <p className = "animeTitle" >{anime.attributes.canonicalTitle}</p>
      <img onClick={this.setRedirect} className = "cards" alt = 'anime' src = {anime.attributes.posterImage.original} id = {anime.id}/>
      </div>
      );
    });

    return (   
      <div className = "container-full allItems">   

    <div onClick = {this.clickedLeftComponent.bind(this)}  className="arrowColumn">
    <img className="arrow invert" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" alt ="wife" />
    </div>

      <div className ="cList">
      {this.renderRedirect()}
      {animeArray}
      </div>

      <div  onClick = {this.clickedRightComponent.bind(this)} className = "arrowColumn">
      <img className="arrow flip invert" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" alt ="wife"/>
      </div>

      </div>
    );
  }
}
export default Card;