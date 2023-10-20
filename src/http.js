import axios from "axios";
import { API_END_POINT, UNSPLASH_ACCESS_KEY } from "./env";

const axiosobj = axios.create({
  baseURL: API_END_POINT, // Set a base URL for your API
  timeout: 5000, // Set a timeout for requests in milliseconds (optional)
  headers: {
    Authorization: "Client-ID " + UNSPLASH_ACCESS_KEY, // Set default headers
    "Content-Type": "application/json", // You can set other headers as needed
  },
});

export default axiosobj;