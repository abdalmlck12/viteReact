import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://quizbackend-6r2q.onrender.com/api',
  headers: {
    "Content-Type": "application/json",
  },
  
});

export default apiClient;
