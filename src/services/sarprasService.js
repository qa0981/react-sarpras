<<<<<<< Updated upstream
import api from "./api";

export const getSarpras = () => api.get("/sarpras");

export const getSarprasById = (id) =>
  api.get(`/sarpras/${id}`);

export const createSarpras = (data) =>
  api.post("/sarpras", data);

export const updateSarpras = (id, data) =>
  api.put(`/sarpras/${id}`, data);

export const deleteSarpras = (id) =>
  api.delete(`/sarpras/${id}`);
=======
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/sarpras";

// Ambil semua data sarpras
export const getSarpras = () => {
  return axios.get(API_URL);
};

// Tambah sarpras
export const createSarpras = (data) => {
  return axios.post(API_URL, data);
};

// Hapus sarpras
export const deleteSarpras = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

// Update sarpras
export const updateSarpras = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};

// Ambil 1 data sarpras
export const getSarprasById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};
>>>>>>> Stashed changes
