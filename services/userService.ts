import axios from '../utils/axiosInstance';

export const fetchUserData = async () => {
  try {
    const response = await axios.get('/user');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
};
