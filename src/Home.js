

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Uncomment this line
import fetchTop10Movies from './fetchTop10Movies'; // Import the function to fetch top 10 movies
import MovieCard from './MovieCard'; // Import the MovieCard component

function Home() {
  const [top10Movies, setTop10Movies] = useState([]);

  useEffect(() => {
    // Fetch the top 10 movies when the component mounts
    fetchTop10Movies()
      .then((movies) => setTop10Movies(movies))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="movie-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {top10Movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <MovieCard key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default Home;
