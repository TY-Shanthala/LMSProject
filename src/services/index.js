import { axiosInstance } from "../axiosConfig";

const get = (url) => {
  return axiosInstance.get(url);
};

const serviceUtil = { get };
export default serviceUtil;
