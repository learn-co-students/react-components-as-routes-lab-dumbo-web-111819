import React from 'react';
import { movies } from '../data';

const Movies = () => {
const arrayOfMovies=movies.map(movie=>(<div>{`${movie.title} ${movie.time}`} {movie.genres.map(genre=><ul>{`${genre}`}</ul>)}</div> ))
// const arrayofGenres=movies.map(movie=>movie.genres.map(genre=>(<ul>{`${genre}`}</ul>)))
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        
          {arrayOfMovies}
          {/* {arrayofGenres} */}
  
    </div>
  );
};

export default Movies;
