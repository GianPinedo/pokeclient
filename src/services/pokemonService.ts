import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5227/api', 
});

export const getPokemons = async () => {
  try {
    const response = await api.get('/pokemon');
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
