import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5227/api', // Asegúrate de que la URL base sea correcta
});

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post('/user/authenticate', { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
