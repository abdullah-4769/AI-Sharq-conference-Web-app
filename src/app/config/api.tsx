import axios from "axios";

const api = axios.create({
  // baseURL: "https://psychic-goldfish-p7prgwg6j5fxgx-3000.app.github.dev",
  baseURL:  "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;