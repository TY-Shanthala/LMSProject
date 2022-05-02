import axios from "axios";

// Development URL
const baseURL = "http://10.10.20.126/";

const axiosInstance = axios.create({ baseURL });
axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    "content-type": "application/json",
    ...config.headers,
  };
  return config;
});
export { axiosInstance };
