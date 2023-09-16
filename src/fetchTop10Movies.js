import axios from 'axios';
import config from './config';
const apiKey = config.APP_API_KEY;

async function fetchTop10Movies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );

    return response.data.results.slice(0, 10);
  } catch (error) {
    throw error;
  }
}

export default fetchTop10Movies;
