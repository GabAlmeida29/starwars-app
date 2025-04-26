import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.info/api/'
});

export const getCharacterById = async (id) => {
  const response = await api.get(`people/${id}`);
  return response.data;
};

export const getStarshipDetails = async (urls) => {
  return await Promise.all(urls.map(url => axios.get(url).then(res => res.data)));
};

export const getFilmDetails = async (urls) => {
  return await Promise.all(urls.map(url => axios.get(url).then(res => res.data)));
};

export default api;
