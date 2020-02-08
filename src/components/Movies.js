import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => {
    let moviesJsx = movies.map(movie => {
      return(
        <div>
          <h2>Name: {movie.title}</h2> <br></br>
          <p>Time: {movie.time}</p>
          <p>Genres</p>
          <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>

        </div>
      )
    })
    return moviesJsx
  }
  return (
    <div>
      <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
