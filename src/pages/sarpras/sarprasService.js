import api from "../api/axios";

export const getSarpras = () => api.get("/sarpras");
export const createSarpras = (data) => api.post("/sarpras", data);
export const updateSarpras = (id, data) => api.put(`/sarpras/${id}`, data);
export const deleteSarpras = (id) => api.delete(`/sarpras/${id}`);
