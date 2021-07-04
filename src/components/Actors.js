import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const arrayOfActors=actors.map(actor=>(<div>{`${actor.name}`} {actor.movies.map(actor=><ul>{`${actor}`}</ul>)}</div> ))
  return (
    <div>
      {/*{code here}*/}
      <h1> Actors Page </h1>
      {arrayOfActors}
    </div>
  );
};

export default Actors;
