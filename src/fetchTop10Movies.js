// fetchTop10Movies.js

import axios from 'axios';

const API_KEY = '5050d39c200a0d0a45a96cf308e0f923';


async function fetchTop10Movies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

    return response.data.results.slice(0, 10); // Get the top 10 movies
  } catch (error) {
    throw error;
  }
}


export default fetchTop10Movies;
