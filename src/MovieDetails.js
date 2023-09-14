

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your API endpoint to fetch movie details
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${'5050d39c200a0d0a45a96cf308e0f923'}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (!movie) {
    return <div className="text-center mt-4">Movie not found.</div>;
  }

  return (
    <div className="container mx-auto mt-8 p-4 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">{movie.title}</h2>
      <p className="text-gray-600">Release Date: {movie.release_date}</p>
      <p className="text-gray-600">Runtime: {movie.runtime} minutes</p>
      <p className="mt-4">{movie.overview}</p>
      {/* Add more details as needed */}
      {/* Display movie details here */}
    </div>
  );
}

export default MovieDetails;
