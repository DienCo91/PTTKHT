import axios from 'axios';

const URL = 'http://localhost:8080';

//test
export const LoginApi = async () => {
  return await axios.get(`${URL}/movie/v1/movie-stats`);
};
