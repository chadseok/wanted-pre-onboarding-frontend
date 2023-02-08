import axios, { InternalAxiosRequestConfig } from "axios";
import STORAGE from "@/utils/constants/storage";

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

axiosInstance.interceptors.request.use(setTokenConfig);

function setTokenConfig(config: InternalAxiosRequestConfig) {
  const token = localStorage.getItem(STORAGE.authToken);
  config.headers.Authorization = token ? `Bearer ${token}` : null;
  return config;
}
export default axiosInstance;
