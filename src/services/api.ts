import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com", // Url Base
  timeout: 10000, // Tempo limite da requisição
});

export default api;

// Requests
export const fetchUserData = (userId: string) => {
  return api.get(`/users/${userId}`);
};

export const createPost = (postData: string) => {
  return api.post("/posts", postData);
};
