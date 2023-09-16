// MovieCard.js

import React from 'react';

function MovieCard({ movie }) {
  return (
   
    <div data-testid="movie-card" className="bg-white shadow-md rounded-lg overflow-hidden mv">
   
      <img
        data-testid="movie-poster"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className="  object-cover"
      />
      <div className="p-4">
        <h2 data-testid="movie-title" className="text-xl font-semibold mb-2">
          {movie.title}
        </h2>
        <p data-testid="movie-release-date" className="text-gray-600">
          Release Date: {movie.release_date}
        </p>
        <p data-testid="movie-release-date" className="text-gray-600 pt-3">
          Rating: {movie.vote_average}
        </p>
        
      </div>
    </div>
  );
}

export default MovieCard;
