import axios from "axios";

// Development URL
const baseURL = "http://localhost:9090/";

const axiosInstance = axios.create({ baseURL });
axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    "content-type": "application/json",
    ...config.headers,
  };
  return config;
});
export { axiosInstance };
