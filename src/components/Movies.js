import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        <div className="movie">{movies[0].title}
        {movies[0].time}
          <ul>Movies:
            <li>{movies[0].genres[0]}</li>
            <li>{movies[0].genres[1]}</li>
            <li>{movies[0].genres[2]}</li>
          </ul>
        </div>
        <div className="movie">{movies[1].title}
        {movies[1].time}
          <ul>genres:
              <li>{movies[1].genres[0]}</li>
              <li>{movies[1].genres[1]}</li>
              <li>{movies[1].genres[2]}</li>
              <li>{movies[1].genres[3]}</li>
              <li>{movies[1].genres[4]}</li>
            </ul>
            </div>
        <div className="movie">{movies[2].title}
        {movies[2].time}
        <ul>genres:
              <li>{movies[2].genres[0]}</li>
              <li>{movies[2].genres[1]}</li>
              <li>{movies[2].genres[2]}</li>
              <li>{movies[2].genres[3]}</li>
              <li>{movies[2].genres[4]}</li>
            </ul>
            </div>
    </div>
  );
};

export default Movies;
