import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5227/api', // Asegúrate de que la URL base sea correcta
});

export const getPokemons = async () => {
  const response = await api.get('/pokemon');
  return response.data;
};
