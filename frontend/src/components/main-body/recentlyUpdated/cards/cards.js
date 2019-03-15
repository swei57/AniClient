import React, { Component } from 'react';
import './cards.css';
import { Redirect } from 'react-router-dom';

class Card extends Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = (showID) => {
    if (this.state.redirect) {
      return <Redirect to={`/show/${showID}`} />
    }
  }

  render() {
    const {name, imageURL,imageID} = this.props;
    return (
        <div>
        <p>{name}</p>
       <div>
       {this.renderRedirect(imageID)}
        <img onClick={this.setRedirect} className = "cards" alt = 'anime' src = {imageURL}/>
       </div>
        </div>
    );
  }
}
export default Card;