import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirectors = () =>{ 
    let directorsJsx = directors.map(director => {
      return(
        <div>
          <h3>{director.name}</h3> <br></br>
          <h5>Movies</h5>
          <ul>
            {director.movies.map(movie => <li>{movie}</li>)}
          </ul>
        </div>
      )
    })
    return directorsJsx
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
