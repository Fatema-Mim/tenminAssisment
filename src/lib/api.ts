// lib/axios.ts
import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'https://api.10minuteschool.com/discovery-service/api/v1',
  headers: {
    'X-TENMS-SOURCE-PLATFORM': 'web',
    'Accept': 'application/json',
  },
  timeout: 5000,
});

api.interceptors.request.use(
  (config) => {
   
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const getData = async <T = any>(
  url: string = '',  // optional with default to ''
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await api.get<T>(url, config);
  return response.data;
};


export default api;
