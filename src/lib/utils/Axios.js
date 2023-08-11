import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
});

export default api;
