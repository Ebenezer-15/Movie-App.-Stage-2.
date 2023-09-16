import React, { useEffect, useState } from 'react';
import { FaStar,FaFilm,FaBars } from 'react-icons/fa';
import axios from 'axios';

function HeroSection() {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetchMovieData()
      .then((data) => setMovieData(data))
      .catch((error) => console.error('Error fetching movie data:', error));
  }, []);

  const fetchMovieData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/4613?api_key=5050d39c200a0d0a45a96cf308e0f923&language=en-US`
      );

      if (response.status !== 200) {
        console.error('Network response error:', response);
        throw new Error('Network response was not ok');
      }

      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching movie data:', error);
      return null;
    }
  };

  return (
    <div className="hero-section">

         <div className="hero-icons">
          <div className="left-icon">
             {/* Movie icon */}
              <FaFilm size={30} />
           </div>
           <div className="search-bar">
             {/* Search bar */}
             <input type="search" placeholder="Search for movies..."  /> 
           </div>
           <div className="right-icon">
             {/* Hamburger icon */}
             <FaBars size={30} />
           </div>
         </div>

      <img
        src={`https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}`}
        alt={movieData?.title}
        className="hero-image"
        
      />
      <div className="hero-content">
        <h1 className="hero-title">{movieData?.title}</h1>
        <p className="hero-description">
          {movieData?.overview.length > 150
            ? movieData?.overview.slice(0, 150) + '...'
            : movieData?.overview}
        </p>
        <button className="watch-trailer-button">
          Watch Trailer
        </button>
        <div className="hero-info">
          <div className="rating">
            <FaStar className="star-icon" />
            {movieData?.vote_average}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
