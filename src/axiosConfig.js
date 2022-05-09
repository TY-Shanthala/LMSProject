import axios from "axios";

// Development URL
const baseURL = "http://10.10.21.208:3000";

const axiosInstance = axios.create({ baseURL });
axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    "content-type": "application/json",
    token: "",
    ...config.headers,
  };
  return config;
});
export { axiosInstance };
