// src/api/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const getPlushies = () => api.get('/plushies');
export const getRankings = () => api.get('/rankings');
export const login = (credentials) => api.post('/users/login', credentials);
export const createCustomization = (data) => api.post('/customizations', data);
export const getAllCustomizations = () => api.get('/customizations');
export const createPlushie = (data) => api.post('/plushies', data);
export const voteCustomization = (id) => api.post(`/customizations/vote/${id}`);
export const deletePlushie = (id) => api.delete(`/plushies/${id}`);
export const deleteCustomization = (id) => api.delete(`/customizations/${id}`);
