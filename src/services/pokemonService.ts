import axios from 'axios';
import { NewPokemon, Pokemon } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:5227/api', 
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getPokemons = async () => {
  try {
    const response = await api.get('/pokemon?type=0&ability=0&gender=0');
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Error específico de Axios
      if (error.response) {
        
        console.error('Error en la respuesta del servidor:', error.response.data);
        throw new Error('Error en la respuesta del servidor');
      } else if (error.request) {
        
        console.error('No se recibió respuesta del servidor:', error.request);
        throw new Error('No se recibió respuesta del servidor');
      } else {
        
        console.error('Error al configurar la solicitud:', error.message);
        throw new Error('Error al configurar la solicitud');
      }
    } else {
      
      console.error('Error inesperado:', error);
      throw new Error('Error inesperado');
    }
  }
};

export const addPokemon = async (pokemon: NewPokemon): Promise<Pokemon> => {
  const response = await api.post('/Pokemon', pokemon);
  return response.data;
};
