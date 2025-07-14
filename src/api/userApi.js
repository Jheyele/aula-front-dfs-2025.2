import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8082" });

export const getUsers = () => API.get("/users");
export const getUserById = (id) => API.get(`/user/${id}`);
export const createUser = (data) => API.post("/users", data);
export const updateUser = (id, data) => API.put(`/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/users/${id}`);
