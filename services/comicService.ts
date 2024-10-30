import axios from '../utils/axiosInstance';

export const fetchComics = async () => {
  try {
    const response = await axios.get('/comics');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch comics:', error);
    throw error;
  }
};
