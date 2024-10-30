import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add any request interceptors here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Add any response interceptors here
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
