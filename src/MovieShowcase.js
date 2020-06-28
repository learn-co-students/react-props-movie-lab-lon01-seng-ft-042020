import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // Iterate over the movieData array
    //Render a MovieCard Component for each object in the movieData array
    // Each Component must have all 4 props passed to it 
    return movieData.map((movie, index) => < MovieCard 
        key = {index}
        title = {movie.title} 
        IMDBRating = {movie.IMDBRating} 
        genres = {movie.genres}
        poster = {movie.poster} 
      /> )
  };

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
