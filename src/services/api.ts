import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("predmed_token");
    if (token && !config.url?.includes("/login")) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle 401 errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized errors
    if (error.response && error.response.status === 401) {
      // Remove token from local storage
      localStorage.removeItem("predmed_token");

      // Redirect to the home page (which should show login)
      // Using window.location instead of router because this can be called from anywhere
      if (typeof window !== "undefined") {
        window.location.href = "/home";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
