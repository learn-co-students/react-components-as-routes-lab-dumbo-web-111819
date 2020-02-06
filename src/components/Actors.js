import React from 'react';
import { actors } from '../data';

const Actors = (props) => {
  return (
    <div>
      <h1>Actors Page</h1>
        <div className="actor">{actors[0].name}
          <ul>Movies:
            <li>{actors[0].movies[0]}</li>
            <li>{actors[0].movies[1]}</li>
            <li>{actors[0].movies[2]}</li>
          </ul>
        </div>
        <div className="actor">{actors[1].name}
          <ul>Movies:
              <li>{actors[1].movies[0]}</li>
              <li>{actors[1].movies[1]}</li>
              <li>{actors[1].movies[2]}</li>
            </ul>
            </div>
        <div className="actor">{actors[2].name}
        <ul>Movies:
              <li>{actors[2].movies[0]}</li>
              <li>{actors[2].movies[1]}</li>
              <li>{actors[2].movies[2]}</li>
            </ul>
            </div>
        <div className="actor">{actors[3].name}
        <ul>Movies:
              <li>{actors[3].movies[0]}</li>
              <li>{actors[3].movies[1]}</li>
              <li>{actors[3].movies[2]}</li>
            </ul>
            </div>
    </div>
  );
};

export default Actors;
