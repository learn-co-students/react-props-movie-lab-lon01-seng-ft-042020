import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    console.log(movieData)
   return movieData.map((movie, idx) => { 
      return <MovieCard 
              key={idx}
              title={movie.title}
              IMDBRating={movie.IMDBRating}
              genres={movie.genres}
              poster={movie.poster}
            />
    }) 
  } 
    // map over your movieData array and return an array of the correct JSX
    // return movieData.map(movie => movieCard={movie})
      // movieTitle={movie.title},
      // rating={IMDBRating},
      // genre={genres},
      // image={poster}


  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}


