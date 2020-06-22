import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((movie,index)=>
      <MovieCard 
      poster={movie.poster}
      title={movie.title}
      IMDBRating={movie.IMDBRating}
      genres={movie.genres}
      key={index}/>      
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
