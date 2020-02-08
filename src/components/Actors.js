import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = () => {
    let actorsJsx = actors.map(actor => {
      return(
      <div className = 'actor'> 
        {actor.name}
          <h4>Movies</h4>
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
      )
    })
    return actorsJsx
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
