import axios from "axios";

const API = axios.create({ 
    baseURL: import.meta.env.VITE_API_BASE_URL 
});

export const getUsers = () => API.get("/users");
export const getUserById = (id) => API.get(`/user/${id}`);
export const createUser = (data) => API.post("/users", data);
export const updateUser = (id, data) => API.put(`/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/users/${id}`);

export const sign = (data) => API.post("/login", data);

export const getTechs = () => API.get("/techs");
export const linkUserTech = (data) => API.post("/user-techs", data);
