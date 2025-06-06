import axios from "axios";

export const makeRequest = axios.create({
  baseURL: process.env.VITE_REACT_APP_API_URL,
  headers: {
    Authorization: "bearer " + process.env.VITE_REACT_APP_API_TOKEN,
  },
});
