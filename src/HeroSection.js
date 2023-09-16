// import React, { useEffect, useState } from 'react';
// import {FaStar, FaCalendarAlt } from 'react-icons/fa'; // Example icons
// import axios from 'axios';

// function HeroSection() {
//   const [movieData, setMovieData] = useState(null);

//   useEffect(() => {
//     // Fetch movie data from your API
//     fetchMovieData()
//       .then((data) => setMovieData(data))
//       .catch((error) => console.error(error));
//   }, []);

//   const fetchMovieData = async () => {
//     try {
//       // Replace 'YOUR_API_KEY' with your actual TMDb API key
//       const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5050d39c200a0d0a45a96cf308e0f923&language=en-US&page=1`);
//       if (response.status !== 200) {
//         throw new Error('Network response was not ok');
//       }
//       const data = response.data;
//       return data;
//     } catch (error) {
//       console.error('Error fetching movie data:', error);
//       return null; // Return null or handle the error as needed
//     }
//   };

//   return (
    
//     <div className="hero-section" style={{ backgroundImage: `url(${movieData?.backgroundImage})` }}>
    
//       <div className="hero-content">
//         <h1 className="hero-title">{movieData?.title}</h1>
//         <p className="hero-description">{movieData?.overview}</p>
//         <div className="hero-info">
//           <div className="rating">
//             <FaStar className="star-icon" />
//             {movieData?.vote_average}
//           </div>
//           <div className="release-date">
//             <FaCalendarAlt className="calendar-icon" />
//             {movieData?.release_date}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;


// import React, { useEffect, useState } from 'react';
// import { FaStar, FaCalendarAlt } from 'react-icons/fa'; // Example icons
// import axios from 'axios';

// function HeroSection() {
//   const [movieData, setMovieData] = useState(null);
//   const [showFullDescription, setShowFullDescription] = useState(false);

//   useEffect(() => {
//     // Fetch movie data from your API
//     fetchMovieData()
//       .then((data) => setMovieData(data))
//       .catch((error) => console.error(error));
//   }, []);

//   const fetchMovieData = async () => {
//     try {
//       // Replace 'YOUR_API_KEY' with your actual TMDb API key
//       const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5050d39c200a0d0a45a96cf308e0f923&language=en-US&page=1`);
//       if (response.status !== 200) {
//         throw new Error('Network response was not ok');
//       }
//       const data = response.data;
//       return data;
//     } catch (error) {
//       console.error('Error fetching movie data:', error);
//       return null; // Return null or handle the error as needed
//     }
//   };

//   const toggleDescription = () => {
//     setShowFullDescription(!showFullDescription);
//   };

//   return (
//     <div className="hero-section" style={{ backgroundImage: `url(${movieData?.backgroundImage})` }}>
//       <div className="hero-content">
//         <h1 className="hero-title">{movieData?.title}</h1>
//         <p className="hero-description">
//           {showFullDescription
//             ? movieData?.overview // Display the full description when showFullDescription is true
//             : `${movieData?.overview.substring(0, 150)}...`} {/* Display a limited description */}
//           <span
//             className="description-toggle"
//             onClick={toggleDescription}
//           >
//             {showFullDescription ? 'Show less' : 'Show more'}
//           </span>
//         </p>
//         <div className="hero-info">
//           <div className="rating">
//             <FaStar className="star-icon" />
//             {movieData?.vote_average}
//           </div>
//           <div className="release-date">
//             <FaCalendarAlt className="calendar-icon" />
//             {movieData?.release_date}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;


// import React, { useEffect, useState } from 'react';
// import { FaFilm, FaStar, FaCalendarAlt } from 'react-icons/fa'; // Example icons
// import axios from 'axios';

// function HeroSection() {
//   const [movieData, setMovieData] = useState(null);
//   const [showFullDescription, setShowFullDescription] = useState(false);

//   useEffect(() => {
//     // Fetch movie data from your API
//     fetchMovieData()
//       .then((data) => setMovieData(data))
//       .catch((error) => console.error(error));
//   }, []);

//   const fetchMovieData = async () => {
//     try {
//       // Replace 'YOUR_API_KEY' with your actual TMDb API key
//       const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1`);
//       if (response.status !== 200) {
//         throw new Error('Network response was not ok');
//       }
//       const data = response.data;
//       return data;
//     } catch (error) {
//       console.error('Error fetching movie data:', error);
//       return null; // Return null or handle the error as needed
//     }
//   };

//   const toggleDescription = () => {
//     setShowFullDescription(!showFullDescription);
//   };

//   return (
//     <div className="hero-section" style={{ backgroundImage: `url(${movieData?.backgroundImage})` }}>
//       <div className="hero-content">
//         <h1 className="hero-title">{movieData?.title}</h1>
//         <p className="hero-description">
//           {movieData?.overview ? (
//             showFullDescription
//               ? movieData.overview // Display the full description when showFullDescription is true
//               : `${movieData.overview.substring(0, 150)}...` // Display a limited description
//           ) : (
//             'Description not available'
//           )}
//           <span className="description-toggle" onClick={toggleDescription}>
//             {showFullDescription ? 'Show less' : 'Show more'}
//           </span>
//         </p>
//         <div className="hero-info">
//           <div className="rating">
//             <FaStar className="star-icon" />
//             {movieData?.vote_average}
//           </div>
//           <div className="release-date">
//             <FaCalendarAlt className="calendar-icon" />
//             {movieData?.release_date}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;


// import React, { useEffect, useState } from 'react';
// import { FaFilm, FaStar, FaCalendarAlt } from 'react-icons/fa'; // Example icons
// import axios from 'axios';

// function HeroSection() {
//   const [movieData, setMovieData] = useState(null);
//   const [showFullDescription, setShowFullDescription] = useState(false);

//   useEffect(() => {
//     // Fetch movie data from your API
//     fetchMovieData()
//       .then((data) => setMovieData(data))
//       .catch((error) => console.error(error));
//   }, []);

//   const fetchMovieData = async () => {
//     try {
//       // Replace 'YOUR_API_KEY' with your actual TMDb API key
//       const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5050d39c200a0d0a45a96cf308e0f923&language=en-US&page=1`);
//       if (response.status !== 200) {
//         throw new Error('Network response was not ok');
//       }
//       const data = response.data;
//       return data;
//     } catch (error) {
//       console.error('Error fetching movie data:', error);
//       return null; // Return null or handle the error as needed
//     }
//   };

//   const toggleDescription = () => {
//     setShowFullDescription(!showFullDescription);
//   };

//   return (
//     <div className="hero-section" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData?.backdrop_path})` }}>
//       <div className="hero-content">
//         <h1 className="hero-title">{movieData?.title}</h1>
//         <p className="hero-description">
//           {movieData?.overview ? (
//             showFullDescription ? (
//               movieData.overview // Display the full description when showFullDescription is true
//             ) : (
//               `${movieData.overview.substring(0, 150)}...` // Display a limited description
//             )
//           ) : (
//             'Description not available'
//           )}
//         </p>
//         {movieData?.overview && (
//           <span className="description-toggle" onClick={toggleDescription}>
//             {showFullDescription ? 'Show less' : 'Show more'}
//           </span>
//         )}
//         <div className="hero-info">
//           <div className="rating">
//             <FaStar className="star-icon" />
//             {movieData?.vote_average}
//           </div>
//           <div className="release-date">
//             <FaCalendarAlt className="calendar-icon" />
//             {movieData?.release_date}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;


// import React, { useEffect, useState } from 'react';
// import { FaStar } from 'react-icons/fa';
// import axios from 'axios'; // Import Axios

// function HeroSection() {
//   const [movieData, setMovieData] = useState(null);

//   useEffect(() => {
//     // Fetch movie data from your API
//     fetchMovieData()
//       .then((data) => setMovieData(data))
//       .catch((error) => console.error(error));
//   }, []);

//   const fetchMovieData = async () => {
//     try {
//       // Replace 'YOUR_API_KEY' and 'YOUR_MOVIE_ID' with actual values
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/YOUR_MOVIE_ID?api_key=5050d39c200a0d0a45a96cf308e0f923&language=en-US`
//       );
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching movie data:', error);
//       return null; // Return null or handle the error as needed
    

//     }
//   };

//   return (
//     <div
//       className="hero-section"
//       style={{
//         backgroundImage: `url(${movieData?.backdrop_path})`, 
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="hero-content">
//         <h1 className="hero-title">{movieData?.title}</h1>
//         <p className="hero-description">
//           {movieData?.overview.length > 150
//             ? movieData?.overview.slice(0, 150) + '...' // Display first 150 characters and '...'
//             : movieData?.overview}
//         </p>
//         <button className="watch-trailer-button">
//           Watch Trailer
//         </button>
//         <div className="hero-info">
//           <div className="rating">
//             <FaStar className="star-icon" />
//             {movieData?.vote_average}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;


// import React, { useEffect, useState } from 'react';
// import { FaStar } from 'react-icons/fa';
// import axios from 'axios'; 

// function HeroSection() {
//   const [movieData, setMovieData] = useState(null);

//   useEffect(() => {
 
//     fetchMovieData()
//       .then((data) => setMovieData(data))
//       .catch((error) => console.error('Error fetching movie data:', error));
//   }, []);

//   const fetchMovieData = async () => {
//     try {
    
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/movie/4613?api_key=5050d39c200a0d0a45a96cf308e0f923&language=en-US`
//       );

//       if (response.status !== 200) {
//         console.error('Network response error:', response);
//         throw new Error('Network response was not ok');
//       }

//       const data = response.data;
//       return data;
//     } catch (error) {
//       console.error('Error fetching movie data:', error);
//       return null; 
//     }
//   };

//   return (
//     <div
//       className="hero-section"
// //       style={{
// //   backgroundImage: `url("${movieData?.backdrop_path}")`,
// //   backgroundSize: 'cover',
// //   backgroundPosition: 'center',
// // }}

// //style={{
//   // backgroundImage: `url("${movieData?.backdrop_path || ''}")`,
// //   backgroundImage: `url(https://www.themoviedb.org/t/p/w1280/4asGkkGy5Mg1owxkkZ52REYK4Ae.jpg/${movieData?.backdrop_path})`,

// //   backgroundSize: 'cover',
// //   backgroundPosition: 'center',
// // }}


//       // style={{
//       //   // backgroundImage: `url(${movieData?.backdrop_path})`, 
//       //  backgroundImage: src(`https://image.tmdb.org/t/p/w300${movie.poster_path}`),

//       //   backgroundSize: 'cover',
//       //   backgroundPosition: 'center', 
//       // }}
//     >
//       <div className="hero-content">
//       {/* <img
//         data-testid="movie-poster"
//         src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`}
//         alt={movieData.title}
//         className="  object-cover"
//       /> */}
//         <h1 className="hero-title">{movieData?.title}</h1>
//         <p className="hero-description">
//           {movieData?.overview.length > 150
//             ? movieData?.overview.slice(0, 150) + '...' 
//             : movieData?.overview}
//         </p>
//         <button className="watch-trailer-button">
//           Watch Trailer
//         </button>
//         <div className="hero-info">
//           <div className="rating">
//             <FaStar className="star-icon" />
//             {movieData?.vote_average}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;


import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
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
