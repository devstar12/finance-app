// src/api/index.ts
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Use Vite's environment variable syntax
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;