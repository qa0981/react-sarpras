import axios from "axios";

const api = axios.create({
<<<<<<< Updated upstream
  baseURL: "http://localhost:8000/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
=======
  baseURL: "http://127.0.0.1:8000/api",
>>>>>>> Stashed changes
});

export default api;
