import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

//Render the title, genres and IMDBRating
// join each genre together into string

export default class CardBack extends Component {

  //If the IMDBRating prop is null, return an <h4> with the contents 'No Rating Found'
  // Otherwise return an <img> tag with the src pointing to a image in assets/stars
  generateRatingElement = () => {
    return (this.props.IMDBRating == null) ? 
     <h4> 'No Rating Found' </h4> : <img src={imgMapper[this.props.IMDBRating]} alt="IMDBRating" />
  }

  render() {
    return (
      <div className="card-back">
        <h3 className="title"> {this.props.title} </h3>
        <span />
        { this.generateRatingElement() }
        <span />
        <h5 className="genres"> {this.props.genre.join(', ')} </h5>
      </div>
    )
  }
}
